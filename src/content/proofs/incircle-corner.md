---
title: The Circle in the Corner
attribution: Traditional
category: other
yearValue: -100
yearDisplay: Antiquity
difficulty:
  level: 3
  label: Pen & paper
summary: Inscribe a circle in the triangle, split the triangle into three pieces around its center, and the theorem falls out of measuring one area two ways.
proposition: A right triangle's incircle ties its area to its semiperimeter in one formula and to its legs in another — setting the two equal, and simplifying, is enough to force $c^2 = a^2 + b^2$.
diagram: incircle
steps:
  - text: "Let triangle $ABC$ have its right angle at $A$, legs $AB=a$ and $AC=b$, hypotenuse $BC=c$. Taking the legs as base and height, its area is $\\tfrac12 ab$."
    highlights: [triOutline]
  - text: "Inscribe its incircle — the circle tangent to all three sides — centered at $I$ with radius $r$."
    highlights: [incircle, tangentAB, tangentAC, tangentBC]
  - text: "The incircle touches both legs, and the angle between them at $A$ is square, so the two tangent points sit exactly $r$ from $A$ along each leg — the same short distance either way."
    highlights: [legTangentsA, tangentAB, tangentAC]
  - text: "For any triangle, the distance from a vertex out to a tangent point equals the semiperimeter $s=\\tfrac12(a+b+c)$ minus the side directly opposite it. From $A$, the opposite side is $BC=c$, so that distance is $s-c$."
    highlights: [hypotenuseSide]
  - text: "Both descriptions name the same length: $r=s-c=\\tfrac12(a+b-c)$."
    highlights: [tangentAB, tangentAC]
  - text: "Now join $I$ to each vertex. This cuts the triangle into three smaller triangles, one on each side, every one of them standing exactly $r$ tall — the incircle's radius, measured straight out to that side."
    highlights: [connectors]
  - text: "Their areas add up to the whole: $\\tfrac12 ar+\\tfrac12 br+\\tfrac12 cr=r\\cdot\\tfrac12(a+b+c)=r\\cdot s$."
    highlights: [triIAB, triIAC, triIBC]
  - text: "Two expressions for the same area: $\\tfrac12 ab = r\\cdot s = \\tfrac12(a+b-c)\\cdot\\tfrac12(a+b+c) = \\tfrac14\\left[(a+b)^2-c^2\\right]$."
    highlights: [triOutline, incircle]
  - text: "Multiply through by $4$: $2ab=(a+b)^2-c^2=a^2+2ab+b^2-c^2$. The $2ab$ on each side cancels, leaving $c^2=a^2+b^2$."
    highlights: [triOutline]
---

The right angle is doing quiet work here: it's the reason the two tangent points nearest $A$ land the same distance out along each leg, which is what lets a general fact about *any* triangle's incircle — tangent length equals semiperimeter minus the opposite side — collapse into the clean formula $r=\tfrac12(a+b-c)$. Drop the right angle and the incircle still exists, but that shortcut disappears with it.
