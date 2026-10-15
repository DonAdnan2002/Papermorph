window.TIMINGS = {
 "intro": {
  "dur": 3.672,
  "marks": {
   "sub": 1.12
  },
  "cues": [
   [
    0.104,
    "Chapter one."
   ],
   [
    1.12,
    "How do you program a chip that is already built?"
   ]
  ]
 },
 "idea": {
  "dur": 47.232,
  "marks": {
   "asic": 4.583,
   "field": 11.432,
   "pull": 34.453,
   "question": 43.086
  },
  "cues": [
   [
    0.091,
    "An ASIC does one job, wired permanently at the factory."
   ],
   [
    4.583,
    "An FPGA is different."
   ],
   [
    6.849,
    "It leaves the factory as a blank grid of logic blocks, and you configure it in the field, in your lab, or even inside a system that is already running."
   ],
   [
    16.497,
    "But how?"
   ],
   [
    17.344,
    "Let's build the smallest possible programmable function."
   ],
   [
    20.938,
    "Two inputs, a and b."
   ],
   [
    23.424,
    "Each one also arrives inverted, as not-a and not-b."
   ],
   [
    27.839,
    "All four signals meet a single AND gate."
   ],
   [
    30.82,
    "Between each signal and the gate sits a potential link."
   ],
   [
    34.453,
    "With no links made, pull-up resistors hold every input of the gate at one, so y is stuck at one."
   ],
   [
    40.599,
    "Everything comes down to one question."
   ],
   [
    43.086,
    "How do we make, or break, a connection inside silicon?"
   ]
  ]
 },
 "fuse": {
  "dur": 46.992,
  "marks": {
   "stuck": 9.102,
   "blow": 26.224,
   "pull": 31.81,
   "fn": 37.292
  },
  "cues": [
   [
    0.104,
    "The oldest trick is the fusible link."
   ],
   [
    3.034,
    "The device ships with every link in place, a tiny fuse at each crossing."
   ],
   [
    9.102,
    "But now each input arrives twice, once true and once inverted, so one of them is always zero, and y is stuck at zero."
   ],
   [
    18.073,
    "To program it, the engineer applies pulses of high voltage and current, and selected fuses simply burn open."
   ],
   [
    26.224,
    "Watch the fuse on not-a, and the fuse on b."
   ],
   [
    29.375,
    "Each one flashes, and breaks."
   ],
   [
    31.81,
    "The pull-ups now hold those gate inputs at one."
   ],
   [
    34.792,
    "What is left is a, and not-b."
   ],
   [
    37.292,
    "So y equals a and not b."
   ],
   [
    39.453,
    "A blown fuse never comes back."
   ],
   [
    41.862,
    "Fusible-link devices are one-time programmable."
   ],
   [
    45.482,
    "There is no going back."
   ]
  ]
 },
 "q1": {
  "dur": 6.192,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.198,
    "Which two fuses must burn open, so that y equals not-a and b?"
   ]
  ]
 },
 "antifuse": {
  "dur": 36.816,
  "marks": {
   "open": 5.547,
   "grow": 23.203,
   "fn": 27.734
  },
  "cues": [
   [
    0.104,
    "The antifuse is the mirror image."
   ],
   [
    3.255,
    "It ships as an open circuit, a microscopic column of amorphous silicon, so resistive that it is a break in the wire."
   ],
   [
    11.38,
    "Every input to the gate reads one."
   ],
   [
    13.932,
    "Programming works backwards too."
   ],
   [
    15.911,
    "Voltage pulses grow a conducting link, a via, turning that silicon into polysilicon."
   ],
   [
    23.203,
    "Grow the antifuse on not-a, then the antifuse on b."
   ],
   [
    27.734,
    "Now y equals not-a and b."
   ],
   [
    30.039,
    "But a grown link cannot be removed either."
   ],
   [
    33.229,
    "The antifuse is also one-time programmable."
   ]
  ]
 },
 "rom": {
  "dur": 45.0,
  "marks": {
   "mask": 14.909,
   "cell": 25.43,
   "row": 32.708
  },
  "cues": [
   [
    0.104,
    "Both of those tricks are permanent."
   ],
   [
    2.435,
    "For a chip you can change, start from memory."
   ],
   [
    5.234,
    "Digital systems lean on two great classes."
   ],
   [
    8.906,
    "RAM, which forgets when the power goes, and ROM, which remembers forever."
   ],
   [
    14.909,
    "A mask-programmed ROM has its data wired in at the factory, by the photo-masks that shape its transistors."
   ],
   [
    22.122,
    "Picture a grid of rows and columns."
   ],
   [
    25.43,
    "At each crossing sits a transistor, and possibly a mask-programmed connection."
   ],
   [
    30.964,
    "When a row activates, a cell with a connection pulls its column down to zero."
   ],
   [
    36.289,
    "A cell without one leaves the pull-up in charge, and the column reads one."
   ],
   [
    41.12,
    "Cheap only in enormous quantities, and never changeable."
   ]
  ]
 },
 "prom": {
  "dur": 26.904,
  "marks": {
   "burn": 18.19
  },
  "cues": [
   [
    0.104,
    "In 1970, Harris Semiconductor gave the fuse a job."
   ],
   [
    4.297,
    "The PROM, programmable read-only memory."
   ],
   [
    7.682,
    "Transistor cells with fusible links, all intact when the chip arrives."
   ],
   [
    12.591,
    "You burn your data in, once."
   ],
   [
    14.714,
    "And if your design has a bug, you do not fix the chip."
   ],
   [
    18.19,
    "You burn a fresh one, and plug it in."
   ],
   [
    20.612,
    "Engineers soon used PROMs not just as memory, but as lookup tables and state machines."
   ]
  ]
 },
 "eprom": {
  "dur": 47.736,
  "marks": {
   "inject": 13.216,
   "stuck": 24.362,
   "uv": 34.44
  },
  "cues": [
   [
    0.091,
    "Intel's 1702, in 1971, changed everything."
   ],
   [
    5.547,
    "The EPROM."
   ],
   [
    6.562,
    "Inside sits a transistor with a second gate, a floating gate, wrapped in insulating oxide."
   ],
   [
    13.216,
    "To program it, apply about twelve volts."
   ],
   [
    16.042,
    "The transistor turns hard on, and hot, energetic electrons force their way through the oxide, onto the floating gate."
   ],
   [
    24.362,
    "When the pulse ends, the charge just sits there, stable for more than a decade, blocking the control gate."
   ],
   [
    31.276,
    "That cell now reads as programmed."
   ],
   [
    33.411,
    "To erase it, shine ultraviolet light through a quartz window, for twenty minutes."
   ],
   [
    39.05,
    "The light drains the electrons away, and the cell is blank again."
   ],
   [
    43.997,
    "Programmable, erasable, and reprogrammable."
   ]
  ]
 },
 "q2": {
  "dur": 5.808,
  "marks": {},
  "cues": [
   [
    0.091,
    "Quick check."
   ],
   [
    1.094,
    "Which of these can be erased and reprogrammed, and which are one-time only?"
   ]
  ]
 },
 "flash": {
  "dur": 30.888,
  "marks": {
   "cost": 12.539,
   "flash": 25.964
  },
  "cues": [
   [
    0.104,
    "Electrical erasure came next."
   ],
   [
    2.604,
    "The EEPROM keeps the floating gate, but with much thinner oxide, and a second transistor erases the cell electrically."
   ],
   [
    10.794,
    "No window, no lamp."
   ],
   [
    12.539,
    "The price."
   ],
   [
    13.646,
    "An EEPROM cell is about two and a half times bigger than an EPROM cell."
   ],
   [
    17.943,
    "Then came FLASH, heir to both."
   ],
   [
    20.573,
    "Some FLASH cells erase only in large blocks, all at once, but fast."
   ],
   [
    25.964,
    "And clever variants even pack two bits of charge into a single cell."
   ]
  ]
 },
 "sram": {
  "dur": 42.048,
  "marks": {
   "cell": 6.315,
   "vol": 26.823
  },
  "cues": [
   [
    0.091,
    "And that brings us to the heart of almost every modern FPGA, the SRAM cell."
   ],
   [
    6.315,
    "A handful of transistors form a latch, and its output drives a control transistor that acts as the switch."
   ],
   [
    13.75,
    "Store a one, and the switch conducts."
   ],
   [
    16.328,
    "Store a zero, and it is off."
   ],
   [
    18.724,
    "Reprogramming takes milliseconds, and you can do it again and again, even reprogram a running board for a new task."
   ],
   [
    26.823,
    "The catch."
   ],
   [
    27.878,
    "SRAM forgets."
   ],
   [
    29.284,
    "Remove the power, and the configuration is gone."
   ],
   [
    32.37,
    "So at every power-up, the FPGA must load its configuration again, from an external memory."
   ],
   [
    39.609,
    "That is why an FPGA boots."
   ]
  ]
 },
 "wrap": {
  "dur": 29.88,
  "marks": {
   "w1": 0.977,
   "w2": 8.685,
   "w3": 14.336,
   "end": 20.13
  },
  "cues": [
   [
    0.091,
    "To sum up."
   ],
   [
    0.977,
    "A programmable link is the atom of configurable logic."
   ],
   [
    5.208,
    "Make it or break it, and you have defined the function."
   ],
   [
    8.685,
    "Fuses, antifuses, mask ROMs and PROMs are one-time programmable."
   ],
   [
    14.336,
    "EPROM erases with ultraviolet light."
   ],
   [
    17.031,
    "EEPROM and FLASH erase electrically."
   ],
   [
    20.13,
    "And SRAM, volatile but instantly reprogrammable, powers almost every FPGA you will meet."
   ],
   [
    27.63,
    "Now try the chapter practice."
   ]
  ]
 },
 "final1": {
  "dur": 3.552,
  "marks": {},
  "cues": [
   [
    0.104,
    "Chapter practice."
   ],
   [
    1.497,
    "Answer about the whole chapter."
   ]
  ]
 },
 "finish": {
  "dur": 2.712,
  "marks": {},
  "cues": [
   [
    0.104,
    "Well done."
   ],
   [
    1.081,
    "That is the end of chapter one."
   ]
  ]
 }
};
