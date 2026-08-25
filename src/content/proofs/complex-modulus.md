---
title: Real and Imaginary
attribution: Traditional
category: algebraic
yearValue: 1806
yearDisplay: c. 1806
difficulty:
  level: 2
  label: Classical
summary: Write a right triangle's two legs as the real and imaginary parts of a single complex number, then multiply that number by its own conjugate — the cross terms cancel themselves, no triangle-specific move required.
proposition: For a complex number $z=a+bi$, the product of $z$ with its conjugate $\bar z=a-bi$ equals $a^2+b^2$ — and since that same product is independently known to equal $|z|^2$, the square of the ordinary distance from the origin, this reads $c^2=a^2+b^2$ for the right triangle formed by $z$'s real part, imaginary part, and its distance from $O$.
diagram: complex
steps:
  - text: "In the complex plane, mark off a length $a$ along the real axis, starting from the origin $O$."
    highlights: [reSeg]
  - text: "From there, mark off a length $b$ straight up, parallel to the imaginary axis. The point reached is the complex number $z=a+bi$."
    highlights: [imSeg]
  - text: "The real and imaginary axes are perpendicular by definition — that's what makes them two separate axes. The distance from $O$ to $z$, the modulus $|z|$, is defined by the ordinary distance formula, with no appeal to any triangle theorem. Call that distance $c$."
    highlights: [modLine]
  - text: "Reflect $z$ across the real axis to get its conjugate, $\\bar z=a-bi$ — same real part, flipped sign on the imaginary part."
    highlights: [zConjPoint]
  - text: "Multiply $z$ by $\\bar z$ as ordinary complex-number algebra, term by term: $(a+bi)(a-bi)=a^2-abi+abi-b^2i^2$."
    highlights: [zPoint, zConjPoint]
  - text: "The two middle terms are exact opposites and cancel outright. Since $i^2=-1$, the last term flips sign again: $z\\bar z=a^2+b^2$."
    highlights: [reSeg, imSeg]
  - text: "Separately — and this is the fact doing the real work — $z\\bar z$ is always equal to $|z|^2$, a standard property of the modulus proved straight from the distance formula. Combine the two: $c^2=a^2+b^2$."
    highlights: [modLine]
---

The reason this doesn't quietly assume what it's proving is that the two facts it leans on are each established on their own terms, before this triangle ever enters the picture. That $z\bar z=(a+bi)(a-bi)=a^2+b^2$ is pure algebra: expand the product and use $i^2=-1$, nothing geometric about it. That $z\bar z=|z|^2$ is a standard fact about the modulus, fixed once and for all when complex numbers are first set up, independent of any particular triangle. Neither fact, on its own, says anything about legs or hypotenuses — it's only in choosing to read $a$ and $b$ off a right triangle's legs that the two combine into $c^2=a^2+b^2$.
