---
title: The Leg That Grows
attribution: Michael Hardy
category: calculus
yearValue: 1988
yearDisplay: "1988"
difficulty:
  level: 3
  label: Pen & paper
summary: Fix one leg, let the other grow, and watch the hypotenuse's rate of change fall out of a similar triangle too small to draw. A differential equation and one boundary condition do the rest.
proposition: If a right triangle has a fixed leg $b$ and a variable leg $a$, its hypotenuse $c$, treated as a function of $a$, satisfies $c\,dc=a\,da$ — and integrating that, with the right boundary condition, gives $c^2=a^2+b^2$.
source: "After Michael Hardy, \"Pythagorean Theorem Made Difficult\", 1988"
diagram: differential
steps:
  - text: "Take a right triangle with its right angle at $R$. Hold the leg $b=RP$ fixed, and let the other leg, $a=RQ$, be free to grow."
    highlights: [legB]
  - text: "Let $a$ increase by a small amount $da$: $Q$ slides outward along the leg, from $Q_0$ to $Q$, and the hypotenuse swings out to a new length, $c+dc$."
    highlights: [daSeg, triBefore]
  - text: "Drop a perpendicular from the old point $Q_0$ onto the new hypotenuse $PQ$, landing at $F$. That gives a second, much smaller right triangle: $Q_0FQ$."
    highlights: [sliverTri]
  - text: "$Q_0FQ$ shares its angle at $Q$ with the big triangle $RPQ$, and both carry a right angle — so by AA, the sliver is similar to the whole triangle. That similarity gives $FQ/Q_0Q = RQ/PQ$, i.e. $FQ/da = a/c$."
    highlights: [sliverTri, legA, hypC]
  - text: "As $da$ shrinks toward zero, $F$ slides along the hypotenuse to meet $Q$, and the little segment $FQ$ becomes exactly $dc$, the true increment in hypotenuse length. So $dc/da=a/c$, or written the other way, $c\\,dc=a\\,da$."
    highlights: [sliverTri]
  - text: "Integrate both sides as $a$ sweeps from $0$ up to its current value, accumulating every one of these infinitesimal slivers along the way: $\\int c\\,dc=\\int a\\,da$ gives $\\dfrac{c^2}{2}=\\dfrac{a^2}{2}+C$."
    highlights: [triBefore, triAfter]
  - text: "One boundary condition pins down $C$: when $a=0$, $Q$ has slid all the way back to $R$, the triangle has collapsed to nothing, and $c$ is just $b$. Plugging that in: $C=b^2/2$."
    highlights: [legB]
  - text: "Substitute $C$ back in and multiply through by $2$: $c^2=a^2+b^2$, reached without ever drawing a square."
    highlights: [legA, legB, hypC]
---

The similar-triangle step is the whole engine here, and it's worth noticing it isn't approximate — $FQ/Q_0Q$ equals $a/c$ exactly, for any $da$ at all, because $Q_0$, $R$, and $Q$ all sit on the same straight leg. What's approximate is only the second half of that step, where $FQ$ is identified with $dc$: that identification gets better and better as $da\to0$, and is exact only in the limit. Everything before the integral is ordinary Euclidean similar-triangle reasoning; the calculus starts precisely at the word "integrate."
