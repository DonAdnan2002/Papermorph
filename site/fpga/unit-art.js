// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in lib/units.css:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class that lib/units.css animates (swap-a,
// hop, orbit, ride, spin, tilt, breathe, ...), or add your own .seen .unit-art .NAME rule and keyframes in a <style> in index.html.
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 FPGA Fundamentals: two rails into an AND gate, a programmable link, a signal breathing at the output.
    reset(P('M230 70H352') + P('M230 130H352') +                       // input rails a and b
      Tx(236, 58, 'a', 22, 'a') + Tx(236, 118, 'b', 22, 'a') +
      P('M378 70H400') + P('M378 130H400') +                           // stubs from the links to the gate
      P('M400 42V158') + P('M400 42h44') + P('M400 158h44') +          // gate body (left edge + stubs)
      P('M444 42C500 42 528 72 528 100C528 128 500 158 444 158Z') +   // the AND curve
      P('M528 100H566') +                                              // output
      `<rect class="t" x="352" y="60" width="26" height="8" rx="2" fill="currentColor" stroke="none" style="--k:${k++}"/>` +   // the link on rail a
      `<rect class="t faint" x="352" y="120" width="26" height="8" rx="2" fill="currentColor" stroke="none" style="--k:${k++}"/>` + // an open link on rail b
      `<circle class="t breathe" r="9" fill="currentColor" stroke="none" style="--k:${k++}" cx="550" cy="100"/>` +              // the signal at y
      Tx(244, 34, 'program the link', 24)),
  ];
})();
