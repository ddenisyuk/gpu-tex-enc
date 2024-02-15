const childProcess = require('child_process');
const path = require("path");
const bins = require('./package.json').bin;

module.exports = {
    generate(input, type = 'BC7', options = ['-zc8192', '-z.1', '-hr32', '-o', '-q']) {

        const bc7enc = executable();
        try {
            // bc7enc [-apng_filename] [options] input_filename.png [compressed_output.dds] [unpacked_output.png]
            const output = `${input}.${type.toLowerCase()}.dds`;
            const args = ['-g', resolveTypeArg(type), ...options, input, output];

            const result = childProcess.spawnSync(bc7enc, args, {stdio: 'inherit'});

            if (result.status !== 0) {
                console.log(`bc7enc status ${result.status}`);
                throw result.error ? result.error : new Error(`bc7enc exit status: ${result.status}`);
            }

            return output;
        } catch (e) {
            console.error(e.message);
            throw e;
        }
    },
    help() {
        const result = childProcess.spawnSync(executable(), ['-help']);
        const stdout = result.stdout.toString();
        console.log(stdout);
        return stdout;
    }
}

function executable() {
    let binName = `bc7enc-${process.platform}`;
    if (process.platform === 'darwin') {
        binName = `${binName}-${process.arch}`
    }
    const bc7enc = bins[binName];

    if (bc7enc) {
        return path.resolve(__dirname, bc7enc);
    } else {
        console.error(`Could not find bc7enc executable for ${process.platform}`);
        throw new Error(`Could not find bc7enc executable for ${process.platform}`);
    }
}

function resolveTypeArg(type) {
    switch (type) {
        case 'BC1':
            return '-1';
        case 'BC3':
            return '-3';
        case 'BC4':
            return '-4';
        case 'BC5':
            return '-5';
        case 'BC7':
            return '';
        default: {
            throw new Error(`Unsupported type: ${type}`);
        }
    }
}