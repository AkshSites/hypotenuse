import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import Euclid from './EuclidFigure.astro';
import SimilarTriangles from './SimilarTrianglesFigure.astro';
import Garfield from './GarfieldFigure.astro';
import Bhaskara from './BhaskaraFigure.astro';
import TwoSquare from './TwoSquareFigure.astro';
import Perigal from './PerigalFigure.astro';
import Algebraic from './AlgebraicFigure.astro';
import Einstein from './EinsteinFigure.astro';

export const FIGURES: Record<string, AstroComponentFactory> = {
  euclid: Euclid,
  'similar-triangles': SimilarTriangles,
  garfield: Garfield,
  bhaskara: Bhaskara,
  'two-square': TwoSquare,
  perigal: Perigal,
  algebraic: Algebraic,
  einstein: Einstein,
};
