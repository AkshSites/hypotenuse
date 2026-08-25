---
title: A Theorem That Doesn't Need a Right Angle
attribution: Pappus of Alexandria
category: euclidean
yearValue: 340
yearDisplay: c. 340
difficulty:
  level: 3
  label: Pen & paper
summary: Build any parallelogram, not necessarily a square, on two sides of any triangle, not necessarily a right one. Extend their outer edges to a meeting point, carry that segment to the third side, and a third parallelogram appears whose area is always the sum of the other two — Pythagoras falls out as the special case where the parallelograms happen to be squares and the triangle happens to be right.
proposition: For any triangle with parallelograms built externally on two of its sides, extending those parallelograms' outer edges to a common point and translating the segment from that point to the shared vertex onto the third side produces a third parallelogram whose area equals the sum of the first two. Specialized to a right triangle with squares on the legs, the construction produces the square on the hypotenuse, giving $a^2+b^2=c^2$.
source: "After Pappus of Alexandria, Collection, Book IV, c. 340 CE"
diagram: pappus
steps:
  - text: "Start with a triangle. Nothing about it needs to be special yet — call the vertex we'll return to $R$, with the two other vertices $Q$ and $P$. We'll specialize to a right triangle, right angle at $R$, only once the general construction is in hand."
    highlights: [triOutline]
  - text: "Build a parallelogram outward on each of the two sides meeting at $R$ — side $RQ$ and side $RP$. Pappus's theorem places no restriction on their shape at all; squares, drawn outward on the legs, are simply the choice that will specialize this to Pythagoras."
    highlights: [sqA, sqB]
  - text: "Each parallelogram has an outer edge, running parallel to the leg it sits on, at the far side from the triangle. Extend both outer edges as straight lines — they meet at a single point, $M$."
    highlights: [extendedA, extendedB]
  - text: "Draw the segment from $M$ back to $R$, the vertex shared by the two original sides."
    highlights: [segMR]
  - text: "Now translate that same segment — same length, same direction — onto the third side, $PQ$, to build a third parallelogram there. In the general theorem this can come out slanted, in any shape. Specialized to squares on the legs of a right triangle, it comes out square: the segment $MR$ turns out to be exactly perpendicular to $PQ$ and exactly as long as it."
    highlights: [sqC]
  - text: "Pappus's theorem: the area of that third parallelogram always equals the sum of the areas of the first two — for any triangle you started with, and any parallelogram shape you chose. Here that reads: area on $RQ$, plus area on $RP$, equals area on $PQ$."
    highlights: [sqA, sqB, sqC]
  - text: "With squares on the legs of a right triangle, those three areas are $a^2$, $b^2$, and $c^2$ — so $a^2+b^2=c^2$, reached as one instance of a theorem that has nothing to do with right angles at all."
    highlights: [sqC, triOutline]
---

The perpendicularity is worth pausing on, because it's not built in anywhere — it falls out. Nothing in the construction says "make the third parallelogram a square"; it says "translate this one particular segment onto the third side," and for a right triangle with squares on its legs, that segment just happens to land exactly perpendicular to the hypotenuse and exactly as long as it. Change the triangle to something other than right, or the two parallelograms to something other than squares, and the third parallelogram tilts and stretches — its area still matches the sum of the other two, but it stops being a square on anything. Pythagoras is the one configuration where the general theorem's output happens to be recognizable as three squares.
