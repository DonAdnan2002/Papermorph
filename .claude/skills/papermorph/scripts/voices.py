#!/usr/bin/env python3
"""Audition narration voices before committing to one: synthesize the same sentence with each candidate
voice, and write a small player page to listen and compare.

    uv run --with edge-tts SKILL/scripts/voices.py ar -o books/<book>/review/voices
    uv run --with edge-tts SKILL/scripts/voices.py en -o OUT -t "a custom sentence" -v en-US-A, en-GB-B

Then serve the folder (python -m http.server 8766 -d OUT), listen, and put the winner in style.json's
voice block and in each narration.<lang>.json. Voices that fail are reported, never fatal."""
import argparse, asyncio, json
from pathlib import Path

import edge_tts

# A short, representative sentence per language: technical words included, like real narration.
DEFAULT_TEXT = {
    'ar': ('مرحبًا. هذا اختبار صوت للنسخة العربية من كتاب الإلكترونيات الرقمية المتقدمة. '
           'في هذا الفصل نشاهد الفيوزات تحترق داخل رقاقة FPGA، ثم تُشحَن البوابة العائمة بالإلكترونات، '
           'وفي النهاية نرى خلايا SRAM تُقلِع رقاقة FPGA عند كل تشغيل.'),
    'en': ('Hello. This is a voice audition for the English edition. In this chapter we watch fuses blow '
           'inside an FPGA, then a floating gate charges with electrons, and finally SRAM cells boot the chip.'),
    'ru': ('Здравствуйте. Это проба голоса для русской версии. В этой главе мы увидим, как перегорают '
           'предохранители внутри FPGA, а затем ячейки SRAM загружают кристалл при каждом включении.'),
}
DEFAULT_VOICES = {
    'ar': ['ar-IQ-BasselNeural', 'ar-IQ-RanaNeural', 'ar-SA-HamedNeural', 'ar-EG-ShakirNeural',
           'ar-AE-HamdanNeural', 'ar-JO-TaimNeural'],
    'en': ['en-US-AndrewMultilingualNeural', 'en-US-GuyNeural', 'en-US-ChristopherNeural', 'en-GB-RyanNeural'],
    'ru': ['ru-RU-DmitryNeural', 'ru-RU-DmitryNeural'],
}

PAGE = """<!doctype html>
<html lang="{lang}"{dir}>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>اختبار الأصوات — voice audition</title>
<style>
  :root {{ --board: #1d2b27; --panel: #22322d; --edge: #3a5047; --chalk: #ece8dc; --dim: #9aaba3; --task: #f0b45a; }}
  body {{ margin: 0; background: var(--board); color: var(--chalk); font: 18px/1.6 "Segoe UI", Arial, sans-serif;
         display: grid; place-items: center; min-height: 100svh; }}
  main {{ width: min(720px, 92vw); padding: 40px 0; }}
  h1 {{ font-size: 24px; font-weight: 600; margin: 0 0 6px; }}
  p.note {{ color: var(--dim); margin: 0 0 28px; }}
  .v {{ display: grid; grid-template-columns: 1fr auto; gap: 6px 16px; align-items: center;
        background: var(--panel); border: 1.5px solid var(--edge); border-radius: 14px; padding: 16px 18px; margin-bottom: 14px; }}
  .v b {{ font-size: 17px; }}
  .v small {{ color: var(--dim); grid-column: 1 / -1; }}
  audio {{ width: 260px; height: 40px; }}
  .err {{ color: #f08c7a; }}
</style></head>
<body><main>
<h1>{title}</h1>
<p class="note">{note}</p>
{items}
</main></body></html>"""


async def synth(text, voice, out_dir, rate='-4%'):
    path = out_dir / f'{voice}.mp3'
    try:
        await edge_tts.Communicate(text, voice, rate=rate).save(str(path))
        return path, None
    except Exception as e:   # a voice can be unavailable; the audition goes on
        return None, str(e)


async def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('lang', help='language code, e.g. ar')
    ap.add_argument('-o', '--out', type=Path, default=Path('review/voices'), help='output folder')
    ap.add_argument('-t', '--text', help='the sentence to speak (default: one per language)')
    ap.add_argument('-v', '--voices', help='comma-separated voice ids (default: a curated list per language)')
    ap.add_argument('-r', '--rate', default='-4%', help="narration rate, as tts.py writes it")
    a = ap.parse_args()

    text = a.text or DEFAULT_TEXT.get(a.lang) or DEFAULT_TEXT['en']
    voices = [v.strip() for v in a.voices.split(',')] if a.voices else DEFAULT_VOICES.get(a.lang) or []
    if not voices:
        names = {v['ShortName'] for v in await edge_tts.list_voices() if v['Locale'].startswith(a.lang + '-')}
        voices = sorted(names)[:8]
    a.out.mkdir(parents=True, exist_ok=True)

    results = await asyncio.gather(*(synth(text, v, a.out, a.rate) for v in voices))
    items, failures = [], []
    for voice, (path, err) in zip(voices, results):
        if path:
            items.append(f'<div class="v"><b>{voice}</b><audio controls preload="metadata" src="{path.name}"></audio>'
                         f'<small>{text[:90]}…</small></div>')
        else:
            failures.append(f'{voice}: {err}')
            items.append(f'<div class="v"><b>{voice}</b><span class="err">failed — {err}</span></div>')

    rtl = ' dir="rtl"' if a.lang in ('ar', 'he', 'fa', 'ur') else ''
    title = 'اختبار الأصوات — اختر صوت السرد' if a.lang == 'ar' else f'Voice audition — {a.lang}'
    note = ('كل صوت يقرأ الجملة نفسها. اختر ما يناسبك ثم اعتمده في style.json.'
            if a.lang == 'ar' else 'Every voice reads the same sentence. Pick one for style.json.')
    (a.out / 'index.html').write_text(PAGE.format(lang=a.lang, dir=rtl, title=title, note=note, items='\n'.join(items)),
                                      encoding='utf-8')
    print(f'{len(items) - len(failures)} samples in {a.out}; open {a.out / "index.html"}')
    for f in failures:
        print('failed:', f)


if __name__ == '__main__':
    asyncio.run(main())
