const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const math = require('mathjs');

function fetchData() {
    // load the gpu power table from https://www.videocardbenchmark.net/ and
    // write the dta out into json blobs.
    fetch("https://www.videocardbenchmark.net/GPU_mega_page.html");
    return fetch('https://www.videocardbenchmark.net/GPU_mega_page.html')
        .then(res => {
            const cookie = res.headers.get('set-cookie')

            return fetch(`https://www.videocardbenchmark.net/data?_=${Date.now()}`, {
                "headers": {
                    "x-requested-with": "XMLHttpRequest",
                    cookie,
                },
                "referrer": "https://www.videocardbenchmark.net/GPU_mega_page.html",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors"
            })
        })
        .catch(reason => {
            console.error('reject')
            console.error(reason)
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            const data = result.data
            const originalData = {};
            for (let i = 0, l = data.length; i < l; i++) {

                const name = data[i].name;
                const g3dPerf = data[i].g3d;
                const g2dPerf = data[i].g2d;
                const tdp = data[i].tdp;
                const testDate = data[i].date;
                const type = data[i].cat;

                const busInterface = data[i].bus.replace(/^:\s/, '');
                const memory = data[i].memSize.replace(/^:\s/, '');
                const clock = data[i].coreClk.replace(/^:\s/, '');
                const memoryClock = data[i].memClk.replace(/^:\s/, '');

                originalData[name] =
                    {

                        name,
                        g3dPerf,
                        g2dPerf,
                        tdp,
                        testDate,
                        type,

                        busInterface,
                        memory,
                        clock,
                        memoryClock,

                    };
            }

            return originalData;
        });

}

function normalizeData(data) {

    const result = {};

    for (const name in data) {

        const {

            g3dPerf,
            g2dPerf,
            tdp,
            type,

            memory,
            clock,
            memoryClock,

        } = data[name];

        // Memory string can be shaped like "256 MB"
        // Math.js uses `MiB` to do power of 2 megabyte conversions
        const cleanedMemory = memory.replace(/,/g, '').replace(/([A-Z])B/g, (match, scale) => `${ scale }iB`);

        // Parse the numeric values
        const parsedTdp = tdp === 'NA' ? null : parseFloat(tdp);
        const parsedMemory = memory === 'NA' ? null : math.unit(cleanedMemory).toNumber('MiB');
        const cleanClock = clock.replace(/,/g, '');
        let parsedClock;

        // If the clock values have a space, dash or slash between them then
        // convert to an average of the two numbers
        const re = /(\d+)[\s-/]+(\d+)/;
        if (re.test(cleanClock)) {

            const unit = cleanClock.replace(re, '').trim();
            const matches = re.exec(cleanClock);
            const val = (parseFloat(matches[1]) + parseFloat(matches[2])) / 2;
            parsedClock = math.unit(val, unit).toNumber('MHz');

        } else {

            try {
                parsedClock = cleanClock === 'NA' ? null : math.unit(cleanClock.replace('Mhz', '')).toNumber('MHz');
            } catch (e) {
                console.error(e);
                console.error(`${ name }, ${ cleanClock }`);
                console.error('');
                parsedClock = null;
            }
        }

        const cleanMemoryClock = memoryClock.replace(/,/g, '');
        let parsedMemoryClock;
        if (re.test(cleanMemoryClock)) {

            const unit = cleanMemoryClock.replace(re, '').trim();
            const matches = re.exec(cleanMemoryClock);
            const val = (parseFloat(matches[1]) + parseFloat(matches[2])) / 2;
            parsedMemoryClock = math.unit(val, unit).toNumber('MHz');

        } else {

            try {
                parsedMemoryClock = cleanMemoryClock === 'NA' ? null : math.unit(cleanMemoryClock.replace(/,/g, '').replace(/\([^)]+\)/, '')).toNumber('MHz');
            } catch (e) {
                console.error(e);
                console.error(`${ name }, ${ cleanMemoryClock }`);
                console.error('');
                parsedMemoryClock = null;
            }
        }

        result[name] =
            {

                name,
                passmark: parseFloat(g3dPerf),
                passmark2d: parseFloat(g2dPerf),

                type,
                tdp: parsedTdp,
                memory: parsedMemory,
                clock: parsedClock,
                memoryClock: parsedMemoryClock,

            };

    }

    return result;

}

module.exports = { fetchData, normalizeData };
