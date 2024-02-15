import {BlockSize, ColorProfile, Quality} from '@gpu-tex-enc/astc'
import {ErrorMetric, Format} from '@gpu-tex-enc/etc'
import {Type} from '@gpu-tex-enc/bc'

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

export function generate(input: string, outputOptions: OutputOptions): Promise<string>;

export function generateBC(input: string, type?: Type, adjust?: boolean, options?: string[]): Promise<string>;

export function generateASTC(input: string, blockSize?: BlockSize, quality?: Quality, colorProfile?: ColorProfile, options?: string[]): Promise<string>;

export function generateETC(input: string, format?: Format, effort?: number, errormetric?: ErrorMetric, options?: string[]): Promise<string>;
