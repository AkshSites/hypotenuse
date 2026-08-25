---
title: Tip to Tail
attribution: Traditional
category: algebraic
yearValue: 1881
yearDisplay: c. 1881
difficulty:
  level: 2
  label: Classical
summary: Write the two legs as perpendicular vectors and the hypotenuse as their sum. Squaring that sum, the cross term vanishes on its own, and no triangle-specific trick is needed at all.
proposition: If $\vec u$ and $\vec v$ are perpendicular vectors, then $|\vec u+\vec v|^2=|\vec u|^2+|\vec v|^2$ — and a right triangle's three sides are exactly such a pair and their sum.
diagram: tip-to-tail
steps:
  - text: "Let triangle $ABC$ have its right angle at $A$, with $B$ and $C$ the other two corners."
    highlights: [triOutline]
  - text: "Let $\\vec u$ be the vector running from $B$ to $A$, and $\\vec v$ the vector running from $A$ to $C$ — two arrows, laid tip to tail."
    highlights: [vecU, vecV]
  - text: "The turn at $A$ is square, so $\\vec u$ and $\\vec v$ are perpendicular. That means their dot product is exactly zero: $\\vec u\\cdot\\vec v=0$."
    highlights: [rightAngleMark]
  - text: "Follow $\\vec u$, then $\\vec v$, and you've walked straight from $B$ to $C$. By the definition of vector addition, that path is $\\vec u+\\vec v$ — the hypotenuse, read as a single vector."
    highlights: [vecSum]
  - text: "A vector's squared length is its dot product with itself. Expanding: $|\\vec u+\\vec v|^2=(\\vec u+\\vec v)\\cdot(\\vec u+\\vec v)=\\vec u\\cdot\\vec u+2(\\vec u\\cdot\\vec v)+\\vec v\\cdot\\vec v$."
    highlights: [vecU, vecV, vecSum]
  - text: "The middle term is the dot product from step three — and it's zero. It isn't cancelled against anything on the other side; it simply was never there."
    highlights: [rightAngleMark]
  - text: "What's left is $|\\vec u+\\vec v|^2=|\\vec u|^2+|\\vec v|^2$. Since $|\\vec u|=a$, $|\\vec v|=b$, and $|\\vec u+\\vec v|=c$, that reads $c^2=a^2+b^2$ — reached without drawing a single square."
    highlights: [vecU, vecV, vecSum]
---

Nothing here is specific to triangles. The argument only ever uses that $\vec u\cdot\vec v=0$ for perpendicular vectors and that squared length means dotting a vector with itself — facts about vector algebra, not about right triangles in particular. The triangle is just the one picture where all three lengths happen to have names already: $a$, $b$, and $c$.
