const childProcess = require('child_process');
const path = require("path");
const features = require('cpu-features')();
const bins = require('./package.json').bin;

module.exports = {
    generate(input, blocksize = '4x4', quality = 'exhaustive', colorProfile = 'cl', options = ['-silent']) {

        const astcenc = executable();
        try {
            // astcenc {-cl|-cs|-ch|-cH} <in> <out> <blocksize> <quality> [options]
            const output = `${input}.astc.ktx`;
            const args = [`-${colorProfile}`, input, output, blocksize, `-${quality}`, ...options];

            const result = childProcess.spawnSync(astcenc, args, {stdio: 'inherit'});

            if (result.status !== 0) {
                console.log(`astcenc status ${result.status}`);
                throw result.error ? result.error : new Error(`astcenc exit status: ${result.status}`);
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
    const astcenc = bins[`astcenc-${process.platform}-${process.arch}-${resolveCpuFeatures()}`];
    if (astcenc) {
        return path.resolve(__dirname, astcenc);
    } else {
        console.error(`Could not find astcenc executable for ${process.platform}-${process.arch}`);
        throw new Error(`Could not find astcenc executable for ${process.platform}-${process.arch}`);
    }
}

function resolveCpuFeatures() {
    if ((features.flags['avx'] || features.flags['avx2'])
        && features.flags['sse4_2'] && features.flags['popcnt'] && features.flags['f16c']) {
        return 'avx2';
    } else if (features.flags['sse4_1'] && features.flags['popcnt']) {
        return 'sse4.1';
    } else {
        return 'sse2';
    }
}
