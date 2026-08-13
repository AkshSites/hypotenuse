import { getCollection, type CollectionEntry } from 'astro:content';
import type { CATEGORIES } from '../content.config';

export type Proof = CollectionEntry<'proofs'>;
export type Category = (typeof CATEGORIES)[number];

export async function getAllProofs(): Promise<Proof[]> {
  const entries = await getCollection('proofs');
  return entries.sort((a, b) => a.data.yearValue - b.data.yearValue);
}

export const CATEGORY_LABELS: Record<Category, string> = {
  algebraic: 'Algebraic',
  dissection: 'Dissection',
  'similar-triangles': 'Similar triangles',
  euclidean: 'Euclidean',
  calculus: 'Calculus',
  other: 'Other',
};
