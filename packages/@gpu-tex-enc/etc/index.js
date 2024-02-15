const childProcess = require('child_process');
const path = require("path");
const bins = require('./package.json').bin;

module.exports = {
    generate(input, format = 'RGBA8', effort = 100, errormetric = 'rgbx', options = ['-j', require('os').cpus().length]) {

        const etctool = executable();
        try {
            // EtcTool source_image [options ...] -output encoded_image
            const output = `${input}.${format.toLowerCase()}.ktx`;
            const args = [input, '-format', format, '-effort', effort, '-errormetric', errormetric, ...options, '-output', output];

            const result = childProcess.spawnSync(etctool, args, {stdio: 'inherit'});

            if (result.status !== 0) {
                console.log(`EtcTool status ${result.status}`);
                throw result.error ? result.error : new Error(`EtcTool exit status: ${result.status}`);
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
    let binName = `etc2comp-${process.platform}`;
    if (process.platform === 'darwin') {
        binName = `${binName}-${process.arch}`
    }
    const etc2comp = bins[binName];

    if (etc2comp) {
        return path.resolve(__dirname, etc2comp);
    } else {
        console.error(`Could not find EtcTool executable for ${process.platform}`);
        throw new Error(`Could not find EtcTool executable for ${process.platform}`);
    }
}