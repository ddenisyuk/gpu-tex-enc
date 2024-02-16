export type Format =
    'ETC1'
    | 'RGB8'
    | 'SRGB8'
    | 'RGBA8'
    | 'SRGBA8'
    | 'RGB8A1'
    | 'SRGB8A1'
    | 'R11'
    | 'SIGNED_R11'
    | 'RG11'
    | 'SIGNED_RG11';
export type ErrorMetric = 'rgba' | 'rgbx' | 'rec709' | 'numeric' | 'normalxyz';


export function generate(input: string, format?: Format, effort?: number, errormetric?: ErrorMetric, options?: string[]): string;
