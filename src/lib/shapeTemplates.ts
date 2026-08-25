// Preset shape templates for the "Any Shape Will Do" explorer — each one a
// ShapeTemplate (see shapeOnSegment in geometry.ts): points relative to the
// canonical unit base segment (0,0)-(1,0), extending outward in +y.
import { pt, add, type Point, type ShapeTemplate } from './geometry';

export const SQUARE_TEMPLATE: ShapeTemplate = [pt(0, 0), pt(1, 0), pt(1, 1), pt(0, 1)];

export const SEMICIRCLE_TEMPLATE: ShapeTemplate = (() => {
  const steps = 28;
  const points: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const angle = Math.PI - (Math.PI * i) / steps;
    points.push(pt(0.5 + 0.5 * Math.cos(angle), 0.5 * Math.sin(angle)));
  }
  return points;
})();

/** A regular n-gon with one side running along the unit base, the rest bulging into +y. */
function regularPolygonOnBase(n: number): ShapeTemplate {
  const points: Point[] = [pt(0, 0), pt(1, 0)];
  const turn = (2 * Math.PI) / n;
  let heading = 0;
  let cursor = pt(1, 0);
  for (let i = 0; i < n - 2; i++) {
    heading += turn;
    cursor = add(cursor, pt(Math.cos(heading), Math.sin(heading)));
    points.push(cursor);
  }
  return points;
}

export const PENTAGON_TEMPLATE: ShapeTemplate = regularPolygonOnBase(5);

// A hand-drawn, deliberately lopsided cloud — asymmetric on purpose, so the
// "any shape, even this one" point lands harder than another regular
// polygon would.
export const BLOB_TEMPLATE: ShapeTemplate = [
  pt(0, 0),
  pt(-0.08, 0.18),
  pt(0.02, 0.4),
  pt(-0.1, 0.62),
  pt(0.1, 0.85),
  pt(0.35, 0.72),
  pt(0.5, 1.05),
  pt(0.7, 0.85),
  pt(0.6, 0.55),
  pt(0.95, 0.5),
  pt(0.85, 0.22),
  pt(1.05, 0.05),
  pt(1, 0),
];

export interface ShapePreset {
  id: string;
  label: string;
  template: ShapeTemplate;
}

export const SHAPE_PRESETS: ShapePreset[] = [
  { id: 'square', label: 'Square', template: SQUARE_TEMPLATE },
  { id: 'semicircle', label: 'Semicircle', template: SEMICIRCLE_TEMPLATE },
  { id: 'pentagon', label: 'Pentagon', template: PENTAGON_TEMPLATE },
  { id: 'blob', label: 'Blob', template: BLOB_TEMPLATE },
];
