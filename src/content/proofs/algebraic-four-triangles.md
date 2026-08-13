---
title: The Tilted Square
attribution: "Traditional — algebraic"
category: algebraic
yearValue: -200
yearDisplay: antiquity
difficulty:
  level: 1
  label: One glance
summary: One square, tilted inside another, turns the whole theorem into an algebra problem that solves itself when a term cancels.
proposition: Expanding the area of a square two different ways — once directly, once as a tilted inner square plus four triangles — forces $a^2+b^2=c^2$ after a single cancellation.
diagram: algebraic
steps:
  - text: "Build a square with side $a+b$. Going around it, mark a point on each edge a distance $a$ from one corner and $b$ from the next."
    highlights: [outer]
  - text: "Join the four marked points in order. They form a tilted square inside — and each of its sides is a hypotenuse of length $c$, since each connects the ends of an $a$ and a $b$ meeting at a right angle."
    highlights: [sqC]
  - text: "The four corners left over are congruent right triangles, legs $a$ and $b$, one tucked into each corner of the big square."
    highlights: [tri1, tri2, tri3, tri4]
  - text: "The big square's area is the tilted square plus the four triangles: $(a+b)^2 = c^2 + 4\\left(\\tfrac12 ab\\right)$."
    highlights: [sqC, tri1, tri2, tri3, tri4]
  - text: "Expand the left side: $a^2 + 2ab + b^2 = c^2 + 2ab$. The $2ab$ appears on both sides and cancels outright, leaving $a^2 + b^2 = c^2$."
    highlights: [sqC]
---

This is the algebra teacher's favorite proof: no congruent-triangle argument, no dissection to justify, just one polynomial identity expanded two ways. It is also, not coincidentally, close to the picture behind [Bhāskara's dissection](/proofs/bhaskara-dissection) — swap which square holds still and which one tilts, and the two proofs are nearly the same figure.
