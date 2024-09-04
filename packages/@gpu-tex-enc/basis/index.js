const childProcess = require('child_process');
const path = require("path");
const bins = require('./package.json').bin;

module.exports = {
    //-uastc -uastc_level 2 -uastc_rdo_l .75
    generate(input, type = 'UASTC', ktx2 = true, options = ['-uastc_level', '4', '-uastc_rdo_l', '0.75', '-ktx2_no_zstandard']) {

        const basisu = executable();
        try {
            // basisu filename [filename ...] <options>
            const output = `${input}.${type.toLowerCase()}.${ktx2 ? 'ktx2' : 'basis'}`;
            if (type === 'UASTC') {
                options.push('-uastc');
            }
            if (ktx2) {
                options.push('-ktx2');
            }

            const args = ['-file', input, '-output_file', output, ...options];

            const result = childProcess.spawnSync(basisu, args, {stdio: 'inherit'});

            if (result.status !== 0) {
                console.log(`basisu status ${result.status}`);
                throw result.error ? result.error : new Error(`basisu exit status: ${result.status}`);
            }

            return output;
        } catch (e) {
            console.error(e.message);
            throw e;
        }
    },
    help() {
        const result = childProcess.spawnSync(executable());
        const stdout = result.stdout.toString();
        console.log(stdout);
        return stdout;
    }
}

function executable() {
    const cpuFeatures = resolveCpuFeatures();
    const cpuFeaturesSuffix = cpuFeatures == null ? "" : `-${cpuFeatures}`;
    const basisu = bins[`basisu-${process.platform}-${process.arch}${cpuFeaturesSuffix}`];
    if (basisu) {
        return path.resolve(__dirname, basisu);
    } else {
        console.error(`Could not find basisu executable for ${process.platform}-${process.arch}`);
        throw new Error(`Could not find basisu executable for ${process.platform}-${process.arch}`);
    }
}

function resolveCpuFeatures() {
    try {
        const cpuFeatures = require('cpu-features');
        if (cpuFeatures) {
            const features = cpuFeatures();
            if (features.flags['sse4_1']) {
                return "sse"
            }
        }
    } catch (e) {
        console.warn("`cpu-features` not found, will use default bin.")
    }
    return null;
}
