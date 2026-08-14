---
title: The Twin Hexagons
attribution: Leonardo da Vinci
category: dissection
yearValue: 1500
yearDisplay: c. 1500
difficulty:
  level: 3
  label: Pen & paper
summary: Rotate a second copy of the triangle into the gap beside the two leg-squares, and a third copy beside the square on the hypotenuse — the two resulting hexagons are congruent, and the theorem falls out by subtraction.
proposition: Two hexagons — one wrapped around the two smaller squares, one wrapped around the larger — turn out to be exactly the same shape, and that alone forces $a^2 + b^2 = c^2$.
diagram: davinci
steps:
  - text: "Let triangle $ABC$ have its right angle at $C$. Erect the usual three squares outward — on $CA$, on $CB$, and on the hypotenuse $AB$."
    highlights: [sqA, sqB, sqC]
  - text: "Between the two leg-squares, right at $C$, a $90°$ wedge sits empty: the two squares' own corners already account for $180°$ there, and the triangle's own right angle accounts for another $90°$, leaving exactly one triangle-shaped gap. Rotate a second copy of the triangle into it, so $CG$ matches $CA$ and $CH$ matches $CB$ — the fit is exact."
    highlights: [triGap]
  - text: "The two leg-squares, the original triangle, and its rotated twin now trace a single six-sided figure. Its area is just the sum of its pieces: $a^2 + b^2 + ab$."
    highlights: [sqA, sqB, triABC, triGap]
  - text: "Do the same thing again on the far edge of the square on the hypotenuse: attach a second copy of the triangle there, matching leg to matching side exactly as before."
    highlights: [sqC, triABC, triFar]
  - text: "Da Vinci's insight: this second figure — one square plus the doubled triangle — traces a hexagon congruent to the first. Congruent figures have equal area, so $a^2 + b^2 + ab = c^2 + ab$. The shared $ab$ cancels, leaving $a^2 + b^2 = c^2$."
    highlights: [sqA, sqB, sqC]
---

This proof is popularly credited to Leonardo da Vinci, and it earns the attribution: it never once appeals to algebra or to a ratio, only to the idea that two shapes built from identical parts, arranged into the same outline, must weigh the same in area. It shares a grandparent with [The Bride's Chair](/proofs/euclid-bride-chair) — both ultimately trust a pair of triangles to match exactly — but where Euclid slides a rectangle into place, Da Vinci spins a whole triangle into the gap left by two abutting squares.
