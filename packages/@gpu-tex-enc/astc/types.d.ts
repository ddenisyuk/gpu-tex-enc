export type BlockSize =
  '4x4'
  | '5x4'
  | '5x5'
  | '6x5'
  | '6x6'
  | '8x5'
  | '8x6'
  | '8x8'
  | '10x5'
  | '10x6'
  | '10x8'
  | '10x10'
  | '12x10'
  | '12x12'
  | '3x3x3'
  | '4x3x3'
  | '4x4x3'
  | '4x4x4'
  | '5x4x4'
  | '5x5x4'
  | '5x5x5'
  | '6x5x5'
  | '6x6x5'
  | '6x6x6';
export type Quality = 'exhaustive' | 'verythorough' | 'thorough' | 'medium' | 'fast' | 'fastest';
export type ColorProfile = 'cl' | 'cs' | 'ch' | 'cH';

export function generate(input: string, blockSize?: BlockSize, quality?: Quality, colorProfile?: ColorProfile, options?: string[]): string;