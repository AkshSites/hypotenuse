// Shared coordinate math for proof diagrams. SVG space is y-down; "outward"
// helpers below assume that convention.

export interface Point {
  x: number;
  y: number;
}

export function pt(x: number, y: number): Point {
  return { x, y };
}

export function add(a: Point, b: Point): Point {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function sub(a: Point, b: Point): Point {
  return { x: a.x - b.x, y: a.y - b.y };
}

export function scale(a: Point, k: number): Point {
  return { x: a.x * k, y: a.y * k };
}

export function len(a: Point): number {
  return Math.hypot(a.x, a.y);
}

export function normalize(a: Point): Point {
  const l = len(a) || 1;
  return scale(a, 1 / l);
}

/** Rotate v by -90°: for edge a→b, perp(b-a) points to the right of travel. */
export function perp(v: Point): Point {
  return { x: v.y, y: -v.x };
}

export function rotate(p: Point, angleRad: number, origin: Point = { x: 0, y: 0 }): Point {
  const s = Math.sin(angleRad);
  const c = Math.cos(angleRad);
  const d = sub(p, origin);
  return add(origin, { x: d.x * c - d.y * s, y: d.x * s + d.y * c });
}

export function lerp(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export function midpoint(a: Point, b: Point): Point {
  return lerp(a, b, 0.5);
}

export function centroid(points: Point[]): Point {
  const s = points.reduce((acc, p) => add(acc, p), pt(0, 0));
  return scale(s, 1 / points.length);
}

/**
 * The square erected on edge p1→p2, outward on the side perp() points to
 * (pass flip:true for the other side). Returns 4 points, p1 and p2 first.
 */
export function squareOn(p1: Point, p2: Point, flip = false): [Point, Point, Point, Point] {
  const edge = sub(p2, p1);
  const n = flip ? { x: -edge.y, y: edge.x } : perp(edge);
  const p3 = add(p2, n);
  const p4 = add(p1, n);
  return [p1, p2, p3, p4];
}

/** Foot of the perpendicular dropped from p onto line a–b. */
export function footOfAltitude(p: Point, a: Point, b: Point): Point {
  const ab = sub(b, a);
  const denom = ab.x * ab.x + ab.y * ab.y;
  const t = denom === 0 ? 0 : (sub(p, a).x * ab.x + sub(p, a).y * ab.y) / denom;
  return add(a, scale(ab, t));
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

/** SVG `points` attribute value for a closed polygon. */
export function polygon(points: Point[]): string {
  return points.map((p) => `${round(p.x)},${round(p.y)}`).join(' ');
}

/** SVG `d` attribute for a polyline/polygon path. */
export function path(points: Point[], close = false): string {
  if (points.length === 0) return '';
  const [first, ...rest] = points;
  const d = [`M ${round(first.x)},${round(first.y)}`, ...rest.map((p) => `L ${round(p.x)},${round(p.y)}`)];
  if (close) d.push('Z');
  return d.join(' ');
}

/**
 * The shared construction behind <SquaresFigure>: a right triangle with the
 * right angle at R, legs to P (up) and Q (right), and a square erected
 * outward on each side. Every proof that reuses the three-squares motif
 * builds on this same layout so ids and coordinates stay consistent.
 */
export interface RightTriangleLayout {
  R: Point;
  P: Point;
  Q: Point;
  legRP: number;
  legRQ: number;
  hyp: number;
  /** square on RP (the "a" leg) */
  squareRP: [Point, Point, Point, Point];
  /** square on RQ (the "b" leg) */
  squareRQ: [Point, Point, Point, Point];
  /** square on PQ (the hypotenuse, "c") */
  squarePQ: [Point, Point, Point, Point];
  /** outward unit normal of the hypotenuse square, from Q toward P's side */
  hypOutward: Point;
}

export function rightTriangleLayout(legRP: number, legRQ: number): RightTriangleLayout {
  const R = pt(0, 0);
  const P = pt(0, -legRP);
  const Q = pt(legRQ, 0);
  const hyp = Math.hypot(legRP, legRQ);
  const squareRP = squareOn(P, R, true);
  const squareRQ = squareOn(R, Q, true);
  const squarePQ = squareOn(Q, P, true);
  const edgeQP = sub(P, Q);
  const hypOutward = normalize({ x: -edgeQP.y, y: edgeQP.x });
  return { R, P, Q, legRP, legRQ, hyp, squareRP, squareRQ, squarePQ, hypOutward };
}
