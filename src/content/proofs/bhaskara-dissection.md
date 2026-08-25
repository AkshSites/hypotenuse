---
title: "Behold"
attribution: Bhāskara II
category: dissection
yearValue: 1150
yearDisplay: "1150"
difficulty:
  level: 1
  label: One glance
summary: Four triangles spin around a small square inside a bigger one. Bhāskara is said to have offered no further explanation than the title.
proposition: A square built on the hypotenuse can be cut into four copies of the original right triangle and one small square — and that dissection alone forces $a^2+b^2=c^2$.
source: "Bijaganita, 1150"
diagram: bhaskara
stepsCollapsed: true
collapsedCaption: "Behold."
steps:
  - text: "Build a square with side $c$, the hypotenuse. Inside it, place four copies of the right triangle, each hypotenuse lying along one side of the square, each rotated a quarter turn from its neighbor."
    highlights: [sqC, tri1, tri2, tri3, tri4]
  - text: "The four right-angle vertices land at the corners of a smaller square in the middle, with side $b-a$."
    highlights: [innerSquare]
  - text: "The big square's area is exactly the four triangles plus that small square: $c^2 = 4\\left(\\tfrac12 ab\\right) + (b-a)^2$."
    highlights: [sqC, tri1, tri2, tri3, tri4, innerSquare]
  - text: "Expand the right side: $4 \\cdot \\tfrac12 ab = 2ab$, and $(b-a)^2 = b^2 - 2ab + a^2$."
    highlights: [innerSquare]
  - text: "Add them together and the $2ab$ terms cancel exactly: $2ab + b^2 - 2ab + a^2 = a^2 + b^2$."
    highlights: [tri1, tri2, tri3, tri4]
  - text: "So $c^2 = a^2 + b^2$."
    highlights: [sqC]
---

The twelfth-century mathematician Bhāskara II is said to have presented this dissection with a single word of commentary — "Behold" — trusting the picture to carry the whole argument. Swap the inner square for $(a-b)^2$ or $(b-a)^2$ and the algebra runs identically either way, since both square to the same thing.
