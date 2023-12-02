import {BlockSize, ColorProfile, Quality} from '../../astc-enc'
import {ErrorMetric, Format} from '../../etc2-enc'
import {Type} from '../../bc7-enc'

export type AstcOptions = {
  blocksize?: BlockSize,
  quality?: Quality,
  colorProfile?: ColorProfile,
  options?: string[]
};

export type EtcOptions = {
  effort?: number,
  errormetric?: ErrorMetric,
  options?: string[]
};

export type BcOptions = {
  options?: string[]
};

export type OutputOptions = {
  'ASTC'?: AstcOptions,
  'BC1'?: BcOptions,
  'BC3'?: BcOptions,
  'BC4'?: BcOptions,
  'BC5'?: BcOptions,
  'ETC1'?: EtcOptions,
  'RGB8'?: EtcOptions,
  'SRGB8'?: EtcOptions,
  'RGBA8'?: EtcOptions,
  'RGB8A1'?: EtcOptions,
  'SRGB8A1'?: EtcOptions,
  'R11'?: EtcOptions
};

export function generate(input: string, outputOptions: OutputOptions): string;

export function generateBc(input: string, type?: Type, adjust?: boolean, options?: string[]): string;

export function generateAstc(input: string, blockSize?: BlockSize, quality?: Quality, colorProfile?: ColorProfile, options?: string[]): string;

export function generateEtc(input: string, format?: Format, effort?: number, errormetric?: ErrorMetric, options?: string[]): string;
