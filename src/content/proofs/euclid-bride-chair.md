---
title: "The Bride's Chair"
attribution: Euclid of Alexandria
category: euclidean
yearValue: -300
yearDisplay: c. 300 BCE
difficulty:
  level: 2
  label: Classical
summary: A straightedge-and-compass dissection that turns the hypotenuse's square into two rectangles, each matched to a leg by a pair of congruent triangles.
proposition: In a right triangle, the square drawn on the side opposite the right angle is equal, in area, to the sum of the squares drawn on the two sides that meet at the right angle.
source: "Elements, Book I, Proposition 47"
diagram: euclid
steps:
  - text: "Let triangle $ABC$ have its right angle at $A$. Erect a square outward on each side — on $AB$, on $AC$, and on the hypotenuse $BC$."
    highlights: [sqA, sqB, sqC]
  - text: "Drop a perpendicular from $A$ to $BC$, and carry it straight on until it meets the far side of the square on $BC$, at $L$. That single stroke splits the big square into two rectangles."
    highlights: [altitude, rectP, rectQ]
  - text: "Draw $BF$, a side of the square on $AB$, and draw $AD$, reaching into the square on $BC$. Since $AB = BF$ and $BD = BC$ are each sides of a square, and angle $ABD$ and angle $FBC$ are each a right angle plus angle $ABC$, triangles $ABD$ and $FBC$ share two sides and the angle between them."
    highlights: [triABD, triFBC]
  - text: "So triangle $ABD$ is congruent to triangle $FBC$ — matching sides enclosing a matching angle force the whole triangles to match."
    highlights: [triABD, triFBC]
  - text: "Triangle $ABD$ is exactly half of rectangle $BDLF$: same base $BD$, apex on a line parallel to it. Triangle $FBC$ is exactly half of square $ABFG$, for the same reason. Equal triangles, doubled, give an equal rectangle and square."
    highlights: [rectP, triABD]
  - text: "Mirror the argument on the far side: triangle $ACE$ pairs with triangle $GCB$ the same way, showing the second rectangle equals the square on $AC$."
    highlights: [rectQ, triACE, triGCB]
  - text: "Together the two rectangles make up the whole square on $BC$. So the square on the hypotenuse equals the sum of the squares on the two legs."
    highlights: [rectP, rectQ, sqC]
---

The nickname comes from the figure's silhouette — the tall pentagon of the leg-squares and altitude has, to generations of students, resembled a chair. The proof itself proves nothing pictorially; the picture is scaffolding for an argument about triangles built on a shared base between parallel lines, run twice.
