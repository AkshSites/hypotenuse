---
title: The Sliding Squares
attribution: "Traditional"
category: dissection
yearValue: -150
yearDisplay: Antiquity
difficulty:
  level: 3
  label: Pen & paper
summary: Instead of proving the rectangles equal the squares by congruent triangles, watch the squares lean over and pour directly into place.
proposition: The square on each leg can be slid — sheared, not cut — until it exactly fills its matching rectangle inside the square on the hypotenuse, with no change in area at any point along the way.
diagram: two-square
steps:
  - text: "Start with the two leg-squares sitting in their natural place, touching corner to corner at the right angle $A$."
    highlights: [sqA, sqB]
  - text: "Drop a perpendicular from $A$ to the hypotenuse $BC$, and carry it on to $L$ on the far side of the square on $BC$. This splits that square into two rectangles."
    highlights: [altitude, rectP, rectQ]
  - text: "Take the square on $AB$ and lean it over — a shear, sliding its top edge sideways while its base stays put — until its far edge lines up with the near edge of the first rectangle."
    highlights: [sqA, rectP]
  - text: "A shear like this never changes area: the base and the perpendicular height between the two parallel sides stay fixed throughout the slide, no matter how far it leans. So the leaned square still has area $AB^2$ — and it now exactly covers the rectangle."
    highlights: [rectP]
  - text: "Shear the square on $AC$ the same way into the second rectangle. Both leg-squares have now poured, without gaining or losing area, into the two pieces of the square on $BC$."
    highlights: [sqB, rectQ, sqC]
---

Shearing is not cutting: nothing here is severed and rejoined. It's the same argument Euclid makes with congruent triangles (see *[The Bride's Chair](/proofs/euclid-bride-chair)*), told instead through a continuous slide — a reminder that "same base, same parallels, same area" is really one idea wearing two costumes.
