// Cloudflare Pages Function — handles GET /random with a real 302 redirect
// to a random proof permalink. Reads the build-time-generated /proofs.json
// so it never needs updating when proofs are added.
export async function onRequestGet(context) {
  const { request } = context;
  const indexUrl = new URL('/proofs.json', request.url);
  const res = await fetch(indexUrl);

  if (!res.ok) {
    return new Response('Could not load the proof index.', { status: 502 });
  }

  const ids = await res.json();
  if (!Array.isArray(ids) || ids.length === 0) {
    return new Response('No proofs available.', { status: 404 });
  }

  const id = ids[Math.floor(Math.random() * ids.length)];
  return Response.redirect(new URL(`/proofs/${id}`, request.url), 302);
}
