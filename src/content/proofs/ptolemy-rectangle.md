---
title: Four Points on a Circle
attribution: Traditional
category: euclidean
yearValue: 150
yearDisplay: c. 150
difficulty:
  level: 2
  label: Classical
summary: Inscribe a rectangle in a circle and hand the whole problem to Ptolemy's theorem — a rule about any cyclic quadrilateral that turns out to already know the answer.
proposition: For any quadrilateral inscribed in a circle, the product of its diagonals equals the sum of the products of its two pairs of opposite sides — and a rectangle's diagonals and sides turn that rule directly into $c^2=a^2+b^2$.
source: "After Ptolemy's theorem, Almagest, c. 150"
diagram: ptolemy
steps:
  - text: "Draw a circle, and inscribe a rectangle in it — a quadrilateral $ABCD$ with all four corners on the circle, one side $a$ and the next $b$."
    highlights: [circle, rectOutline]
  - text: "A rectangle's two diagonals are equal — each runs from one corner straight through the center to the opposite one. Call that shared length $c$, without assuming anything yet about what it equals."
    highlights: [diagAC, diagBD]
  - text: "The sides come in two matching pairs: $AB$ and $CD$ both measure $a$; $BC$ and $DA$ both measure $b$."
    highlights: [sidesA, sidesB]
  - text: "Ptolemy's theorem holds for any quadrilateral inscribed in a circle, rectangle or not: the product of the two diagonals equals the sum of the products of the two pairs of opposite sides."
    highlights: [diagAC, diagBD, sidesA, sidesB]
  - text: "Put this rectangle's own lengths in: $AC\\cdot BD = AB\\cdot CD + BC\\cdot DA$ becomes $c\\cdot c = a\\cdot a + b\\cdot b$."
    highlights: [diagAC, diagBD]
  - text: "That's $c^2=a^2+b^2$ — reached without ever assuming it. Ptolemy's theorem has its own proof, by constructing one auxiliary point and comparing similar triangles, and that argument never mentions a right angle or the Pythagorean theorem at all."
    highlights: [rectOutline, circle]
---

It's worth being precise about why this isn't circular. Ptolemy's theorem is proved independently — the standard argument marks a point on one diagonal so that two angles match, builds a pair of similar triangles from it, and reads off the relation among the four sides and two diagonals. Nowhere in that construction does a right angle, or the Pythagorean theorem, ever appear. Only afterward do we choose to feed it a rectangle.
