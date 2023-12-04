#!/usr/bin/env node
const yargs = require('yargs/yargs');
const hideBin = require('yargs/helpers').hideBin;
const generate = require('./index').generate;

const argv = yargs(hideBin(process.argv))
    .alias("h", "help")
    .usage('Usage: $0 -i [filepath] -t [types] [format specific options]')
    .options({
        input: {
            alias: 'i',
            description: "<filepath> Input image file path",
            requiresArg: true,
            required: true
        },
        types: {
            alias: 't',
            description: "<type> Output tex types",
            requiresArg: true,
            required: true,
            array: true,
            choices: ['ETC1', 'RGB8', 'SRGB8', 'RGBA8', 'RGB8A1', 'SRGB8A1', 'R11', 'ASTC', 'BC1', 'BC2', 'BC3', 'BC4', 'BC5', 'BC7']
        },
        'astc.blockSize': {
            description: "<blockSize> [astcenc] The block size must be a valid ASTC block size",
            default: '4x4',
            choices: ['4x4', '5x4', '5x5', '6x5', '6x6', '8x5', '8x6', '8x8', '10x5', '10x6', '10x8', '10x10', '12x10', '12x12', '3x3x3', '4x3x3', '4x4x3', '4x4x4', '5x4x4', '5x5x4', '5x5x5', '6x5x5', '6x6x5', '6x6x6']
        },
        'astc.quality': {
            description: "<quality> [astcenc] The quality level configures the quality-performance tradeoff for the compressor",
            choices: ['exhaustive', 'verythorough', 'thorough', 'medium', 'fast', 'fastest'],
            default: 'exhaustive'
        },
        'astc.colorProfile': {
            description: "<colorProfile> [astcenc] The color profile is specified using the cl (LDR linear), cs (LDR, sRGB), ch (HDR RGB, LDR A), or cH (HDR RGBA) encoder options.",
            choices: ['cl', 'cs', 'ch', 'cH'],
            default: 'cl'
        },
        'astc.options': {
            description: "<options> [astcenc] another options, see astcenc official documentation",
            array: true,
        },
        'bc.adjust': {
            description: "<boolean> [bc7enc] According to WEBGL spec texture width and height must be a multiple of 4",
            boolean: true,
            default: true
        },
        'bc.options': {
            description: "<options> [bc7enc] options, see bc7enc official documentation",
            array: true,
            default: ['-zc8192', '-z.1', '-hr32', '-o']
        },
        'etc.effort': {
            description: "<amount> [etc2comp] number between 0 and 100 to specify the encoding quality (100 is the highest quality)",
            default: 100
        },
        'etc.errormetric': {
            description: "<error_metric> [etc2comp] specify the error metric",
            choices: ['rgba', 'rgbx', 'rec709', 'numeric', 'normalxyz'],
            default: 'rgbx'
        },
        'etc.options': {
            description: "<options> [etc2comp] another options, see etc2comp official documentation",
            array: true,
            default: ['-j', require('os').cpus().length, '-v']
        }
    }).argv;

const outputOptions = {};
for (const type of argv.types) {
    outputOptions[type] = {};
    switch (type) {
        case 'BC1':
        case 'BC2':
        case 'BC3':
        case 'BC4':
        case 'BC5':
        case 'BC7': {
            if (argv.bc) {
                outputOptions[type] = argv.bc;
            }
            break;
        }
        case 'ETC1':
        case 'RGB8':
        case 'SRGB8':
        case 'RGBA8':
        case 'RGB8A1':
        case 'SRGB8A1':
        case 'R11': {
            if (argv.etc) {
                outputOptions[type] = argv.etc;
            }
            break;
        }
        case 'ASTC': {
            if (argv.astc) {
                outputOptions[type] = argv.astc;
            }
            break;
        }
    }
}

console.log(generate(argv.input, outputOptions));