---
title: Out and Back In
attribution: Liu Hui
category: dissection
yearValue: 263
yearDisplay: c. 263
difficulty:
  level: 3
  label: Pen & paper
summary: Cut the smaller leg-square into four matching pieces through its center, leave the larger leg-square whole, and slide all five — no turning, only sliding — until they exactly cover the square on the hypotenuse.
proposition: The square on the hypotenuse can be assembled, by sliding alone, from four congruent pieces of the smaller leg-square and one whole copy of the larger leg-square.
source: "After Liu Hui's commentary on the Jiuzhang Suanshu (Nine Chapters on the Mathematical Art), c. 263 CE"
diagram: liuhui
steps:
  - text: "On the two legs of the right triangle, build squares outward — $B$ on the longer leg, $A$ on the shorter."
    highlights: [sqB, piece1, piece2, piece3, piece4]
  - text: "Mark the center of $A$, the smaller square. Draw two lines through that point — one parallel to the hypotenuse, one perpendicular to it. Together they cut $A$ into four congruent pieces."
    highlights: [piece1, piece2, piece3, piece4]
  - text: "$B$ is left whole. It becomes the fifth piece of the puzzle, untouched."
    highlights: [sqB]
  - text: "This is the in-and-out principle (chū rù xiāng bǔ): whatever sticks out of one region is carried, by sliding alone, into a gap in another, until the target is exactly filled with nothing left over and nothing doubled up. Here, the five pieces slide — no turning — into place to exactly cover the square on the hypotenuse."
    highlights: [sqB, piece1, piece2, piece3, piece4, sqC]
  - text: "Every scrap of area from the two leg-squares lands inside the hypotenuse's square, and none of it overlaps. So $a^2+b^2=c^2$."
    highlights: [sqC]
---

Liu Hui's own diagram for this argument does not survive; his surviving commentary describes the principle of cutting and sliding pieces to match areas, without the figure itself. What's shown here is a modern rendering built to satisfy that same rule honestly — every piece here moves by sliding only, verified by direct computation rather than by eye — not a claim to reproduce his lost original stroke for stroke. The four-piece cut works for any right triangle; quartering the smaller leg-square rather than the larger one, as done here, is just as valid a choice as the reverse.
