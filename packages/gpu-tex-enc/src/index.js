const bcenc = require('@gpu-tex-enc/bc');
const astcenc = require('@gpu-tex-enc/astc');
const etcenc = require('@gpu-tex-enc/etc');
const sharp = require('sharp');
const fs = require("fs");

function generate(input, outputOptions) {
    const results = {};
    for (const type in outputOptions) {
        const opts = outputOptions[type];
        switch (type) {
            case 'BC1':
            case 'BC2':
            case 'BC3':
            case 'BC4':
            case 'BC5':
            case 'BC7': {
                results[type] = generateBC(input, type, opts.adjust, opts.options);
                break;
            }
            case 'ETC1':
            case 'RGB8':
            case 'SRGB8':
            case 'RGBA8':
            case 'RGB8A1':
            case 'SRGB8A1':
            case 'R11': {
                results[type] = generateETC(input, type, opts.effort, opts.errormetric, opts.options);
                break;
            }
            case 'ASTC': {
                results[type] = generateASTC(input, opts.blocksize, opts.quality, opts.colorProfile, opts.options);
                break;
            }
            default: {
                console.warn(`Unsupported output type: ${type}`);
            }
        }
    }
    return results;
}

function generateBC(input, type, adjust, options) {
    if (adjust) {
        return adjustAndGenerate(input, type, options);
    } else {
        return bcenc.generate(input, type, options);
    }
}

function generateASTC(input, blocksize, quality, colorProfile, options) {
    return astcenc.generate(input, blocksize, quality, colorProfile, options);
}

function generateETC(input, format, effort, errormetric, options) {
    return etcenc.generate(input, format, effort, errormetric, options);
}

async function adjustAndGenerate(input, type, options) {
    const img = sharp(input);

    const metadata = await img.metadata();
    const right = metadata.width % 4 !== 0 ? 4 - (metadata.width % 4) : 0;
    const bottom = metadata.height % 4 !== 0 ? 4 - (metadata.height % 4) : 0;

    if (right > 0 || bottom > 0) {
        const adjustedInput = `${input}.aj`;
        try {
            await img
                .extend({
                    bottom: bottom,
                    right: right,
                    background: {r: 0, g: 0, b: 0, alpha: 0}
                })
                .toFile(adjustedInput);

            return bc7enc.generate(adjustedInput, type, options);
        } catch (err) {
            console.error("Failed to adjust image", err);
            throw err;
        } finally {
            fs.rmSync(adjustedInput);
        }
    } else {
        return bc7enc.generate(input, type, options);
    }
}


module.exports = {
    generate,
    generateBC,
    generateASTC,
    generateETC
};
