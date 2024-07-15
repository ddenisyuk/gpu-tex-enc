import {BlockSize, ColorProfile, Quality} from '@gpu-tex-enc/astc'
import {ErrorMetric, Format} from '@gpu-tex-enc/etc'
import {Type} from '@gpu-tex-enc/bc'
import {Type as BasisType} from '@gpu-tex-enc/basis'

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

export type BasisOptions = {
    options?: string[]
};

export type OutputOptions = {
    ASTC?: AstcOptions,
    BC1?: BcOptions,
    BC3?: BcOptions,
    BC4?: BcOptions,
    BC5?: BcOptions,
    BC7?: BcOptions,
    ETC1?: EtcOptions,
    RGB8?: EtcOptions,
    SRGB8?: EtcOptions,
    RGBA8?: EtcOptions,
    SRGBA8?: EtcOptions,
    RGB8A1?: EtcOptions,
    SRGB8A1?: EtcOptions,
    R11?: EtcOptions
    SIGNED_R11?: EtcOptions
    RG11?: EtcOptions
    SIGNED_RG11?: EtcOptions
    UASTC?: BasisOptions
    ETC1S?: BasisOptions
};

export type GenerationOutput = {
    ASTC?: string,
    BC1?: string,
    BC3?: string,
    BC4?: string,
    BC5?: string,
    BC7?: string,
    ETC1?: string,
    RGB8?: string,
    SRGB8?: string,
    RGBA8?: string,
    SRGBA8?: string,
    RGB8A1?: string,
    SRGB8A1?: string,
    R11?: string
    SIGNED_R11?: string
    RG11?: string
    SIGNED_RG11?: string
    UASTC?: string
    ETC1S?: string
};


export function generate(input: string, outputOptions: OutputOptions): Promise<GenerationOutput>;

export function generateBC(input: string, type?: Type, adjust?: boolean, options?: string[]): Promise<string>;

export function generateASTC(input: string, blockSize?: BlockSize, quality?: Quality, colorProfile?: ColorProfile, options?: string[]): Promise<string>;

export function generateETC(input: string, format?: Format, effort?: number, errormetric?: ErrorMetric, options?: string[]): Promise<string>;

export function generateBasis(input: string, type?: BasisType, ktx2?: boolean, options?: string[]): Promise<string>;
