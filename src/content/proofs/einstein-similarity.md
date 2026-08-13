---
title: Any Shape Will Do
attribution: "Albert Einstein (attributed, age 12)"
category: similar-triangles
yearValue: 1891
yearDisplay: "c. 1891"
difficulty:
  level: 2
  label: Classical
summary: Forget squares entirely. Any family of similar shapes, one on each side, proves the theorem — because the altitude already tiles the triangle with two smaller copies of itself.
proposition: If similar shapes are erected on each side of a right triangle, the shape on the hypotenuse equals the sum of the shapes on the two legs — squares are only the most familiar member of that family.
source: "Recounted in Einstein's autobiographical notes"
diagram: einstein
steps:
  - text: "Let triangle $ABC$ be right-angled at $A$. This time, forget squares — erect on each side any shape you like, so long as the three shapes are similar to one another."
    highlights: [triWhole]
  - text: "Drop the altitude from $A$ to $BC$, meeting it at $D$. It splits $ABC$ into two smaller triangles, $ABD$ and $ACD$ — each one similar to $ABC$ itself."
    highlights: [altitude, triABD, triACD]
  - text: "So the 'shape' on $AB$ (triangle $ABD$) and the shape on $AC$ (triangle $ACD$) aren't just similar to $ABC$ — laid out this way, they tile it exactly, with no gap and no overlap."
    highlights: [triABD, triACD, triWhole]
  - text: "Any family of similar shapes has area proportional to the square of a chosen reference length: area $= k \\cdot (\\text{side})^2$, with the same constant $k$ for every member of the family."
    highlights: [triABD, triACD]
  - text: "Apply that here: $k \\cdot AB^2 + k \\cdot AC^2 = k \\cdot BC^2$, since the two pieces make up the whole. Divide out $k$, and $AB^2 + AC^2 = BC^2$ — reached without ever drawing a square."
    highlights: [triWhole]
---

Einstein describes a proof along these lines in his autobiographical notes, recalling it as one of his early mathematical delights. The core move — that *any* similar family scales the same way, not just squares — is the same idea that powers [The Altitude's Shadow](/proofs/similar-triangles-altitude), pushed one level more general.
