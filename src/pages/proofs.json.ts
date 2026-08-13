import type { APIRoute } from 'astro';
import { getAllProofs } from '../lib/proofs';

export const prerender = true;

export const GET: APIRoute = async () => {
  const proofs = await getAllProofs();
  const ids = proofs.map((p) => p.id);
  return new Response(JSON.stringify(ids), {
    headers: { 'Content-Type': 'application/json' },
  });
};
