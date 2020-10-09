import path from 'path';
import babel from 'rollup-plugin-babel';

function createConfig(file) {

    return {
        input: path.join(__dirname, `./src/${ file }`),
        plugins: [
            babel()
        ],
        output: {
            name: 'GpuPowerEstimate',
            extend: true,
            format: 'umd',
            file: path.join(__dirname, `./dist/${ file }`),
            sourcemap: true,
        },
    };

}

export default [createConfig('index.js'), createConfig('database.js'), createConfig('utils.js')];
