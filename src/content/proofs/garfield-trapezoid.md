---
title: The Congressman's Trapezoid
attribution: James A. Garfield
category: algebraic
yearValue: 1876
yearDisplay: "1876"
difficulty:
  level: 2
  label: Classical
summary: No squares at all — just two copies of a triangle, a trapezoid, and an area computed two different ways.
proposition: In a right triangle with legs $a$, $b$ and hypotenuse $c$, the identity $a^2 + b^2 = c^2$ falls out of computing one trapezoid's area by two different methods.
source: "New-England Journal of Education, 1876"
diagram: garfield
steps:
  - text: "Place two copies of a right triangle with legs $a$ and $b$ so that one's leg $b$ and the other's leg $a$ lie along a single straight line — together making a segment of length $a+b$."
    highlights: [triAB1, triAB2]
  - text: "Join their two free corners with a straight segment. That closes a trapezoid: parallel sides of length $a$ and $b$, standing $a+b$ apart."
    highlights: [trapezoid]
  - text: "The two segments running from the meeting point out to the trapezoid's slanted corners are each a hypotenuse of length $c$ — and the angle between them is a right angle, since the triangle's two acute angles are complementary and sit side by side here."
    highlights: [triC]
  - text: "So the trapezoid is really three triangles: the original triangle, a mirrored copy of it, and a right isosceles triangle with legs $c$."
    highlights: [triAB1, triAB2, triC]
  - text: "Write the trapezoid's area two ways — once by the trapezoid formula, once as the sum of the three triangles — and set them equal: $\\tfrac{1}{2}(a+b)^2 = \\tfrac{1}{2}ab + \\tfrac{1}{2}ab + \\tfrac{1}{2}c^2$."
    highlights: [trapezoid, triAB1, triAB2, triC]
  - text: "Expand and cancel the matching $2ab$ terms on each side, and what's left is $a^2 + b^2 = c^2$."
    highlights: [triC]
---

James Garfield found this while serving in the House of Representatives, five years before his presidency; it ran in the *New-England Journal of Education* credited only to "General James A. Garfield, M. C." It is one of the few well-known proofs that never draws a square.
