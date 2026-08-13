---
title: The Altitude's Shadow
attribution: Traditional — similar triangles
category: similar-triangles
yearValue: -250
yearDisplay: antiquity
difficulty:
  level: 2
  label: Classical
summary: One perpendicular line splits a right triangle into two smaller copies of itself. Their proportions alone force the theorem.
proposition: In a right triangle, the square on the hypotenuse equals the sum of the squares on the two legs — provable entirely from the proportions a single altitude creates, without ever measuring an area.
source: "Related to Euclid, Elements VI.31"
diagram: similar-triangles
steps:
  - text: "Let triangle $ABC$ be right-angled at $A$. Whatever else is true, three squares — on $AB$, on $AC$, on $BC$ — sit waiting on its sides."
    highlights: [sqA, sqB, sqC]
  - text: "Drop a perpendicular from $A$ to the hypotenuse, meeting it at $D$. This one stroke cuts triangle $ABC$ into two smaller triangles, $ABD$ and $ACD$."
    highlights: [altitude, triABD, triACD]
  - text: "Triangle $ABD$ shares angle $B$ with triangle $ABC$, and both have a right angle. Two matching angles make them similar."
    highlights: [triABD, triWhole]
  - text: "By the same reasoning — sharing angle $C$, both right-angled — triangle $ACD$ is similar to triangle $ABC$ as well."
    highlights: [triACD, triWhole]
  - text: "Similar triangles keep their sides in proportion. From $ABD \\sim ABC$: $AB^2 = BC \\cdot BD$. From $ACD \\sim ABC$: $AC^2 = BC \\cdot CD$."
    highlights: [triABD, triACD]
  - text: "Add the two. Since $BD + CD$ is the whole of $BC$: $AB^2 + AC^2 = BC \\cdot (BD + CD) = BC^2$."
    highlights: [sqA, sqB, sqC]
---

The same altitude also proves the geometric-mean relation $AD^2 = BD \cdot CD$ — a fact usually taught right alongside this proof, and provable by the identical similar-triangle argument.
