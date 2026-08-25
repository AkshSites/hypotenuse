import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The diagram key selects which figure component a proof page renders.
// Adding a new diagram means adding its key here and a matching case in
// src/components/figures/index.ts — see README.md.
export const DIAGRAM_KEYS = [
  'euclid',
  'similar-triangles',
  'garfield',
  'bhaskara',
  'two-square',
  'perigal',
  'algebraic',
  'einstein',
  'davinci',
  'incircle',
  'tip-to-tail',
  'ptolemy',
  'differential',
  'complex',
] as const;

export const CATEGORIES = [
  'algebraic',
  'dissection',
  'similar-triangles',
  'euclidean',
  'calculus',
  'other',
] as const;

const stepSchema = z.object({
  text: z.string(),
  // ids of figure elements this step lights up — must match data-figure-id
  // values emitted by the proof's diagram component.
  highlights: z.array(z.string()).default([]),
});

const proofsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proofs' }),
  schema: z.object({
    title: z.string(),
    attribution: z.string(),
    category: z.enum(CATEGORIES),
    yearValue: z.number().int(),
    yearDisplay: z.string(),
    difficulty: z.object({
      level: z.union([z.literal(1), z.literal(2), z.literal(3)]),
      label: z.string(),
    }),
    summary: z.string(),
    proposition: z.string(),
    source: z.string().optional(),
    diagram: z.enum(DIAGRAM_KEYS),
    steps: z.array(stepSchema).min(1),
    // When true, the step-by-step walkthrough starts hidden behind a
    // "show the algebra" toggle instead of being shown by default —
    // for proofs (like Bhaskara's) whose whole point is that the
    // diagram needs no explanation.
    stepsCollapsed: z.boolean().default(false),
    collapsedCaption: z.string().optional(),
  }),
});

export const collections = {
  proofs: proofsCollection,
};
