const VB = require('./fetch-videocard-benchmark.js');
const TP = require('./fetch-techpowerup-specs.js');
const NC = require('./fetch-notebookcheck-specs.js');
const { findMatch_old } = require('../dist/utils.js');
const fs = require('fs');
const path = require('path');
const _ = require('lodash')

console.log('Normalizing videocard benchmark data...');
VB.data = VB.normalizeData(require('../data/videocard-benchmark-gpus.json'));

console.log('Normalizing techpowerup data...');
TP.data = TP.normalizeData(require('../data/techpowerup-gpus.json'));

console.log('Normalizing notebookcheck data...');
NC.data = NC.normalizeData(require('../data/notebookcheck-gpus.json'));

const result = {};

function getMatch(name, database) {

	const { score, matches } = findMatch_old(name, Object.keys(database));
	if (score > 0.75) {

		const matchName = matches[0];
		const res = database[matchName];
		delete database[matchName];
		return res;

	}

	return null;

}

function getBaseObject (name) {

	return {
		name,
		names: [name],

		// codeName: null,
		// architecture: null,
		// openGL: null,
		// directX: null,

		vendor: null,
		released: null,
		// memory: null,
		// memoryType: null,

		// clock: null,
		// memoryClock: null,
		// shaderUnits: null,
		// renderUnits: null,
		// textureUnits: null,

		benchmarks: {},
		// type: null,
		// tdp: null,
	};

}

function joinTPData(data, target) {

	if (!target.names.includes(data.name)) target.names.push(data.name);

	target.vendor = target.vendor || data.vendor;
	target.released = target.released || data.released;
	// target.memory = target.memory || data.memory;
	// target.memoryType = target.memoryType || data.memoryType;

	// target.clock = target.clock || data.clock;
	// target.memoryClock = target.memoryClock || data.memoryClock;

	// target.shaderUnits = target.shaderUnits || data.shaderUnits;
	// target.renderUnits = target.renderUnits || data.renderUnits;
	// target.textureUnits = target.textureUnits || data.textureUnits;

}

function joinVBData(data, target) {

	if (!target.names.includes(data.name)) target.names.push(data.name);

	// target.memory = target.memory || data.memory;
	// target.clock = target.clock || data.clock;
	// target.memoryClock = target.memoryClock || data.memoryClock;

	// target.type = target.type || data.type;
	// target.tdp = target.tdp || data.tdp;

	target.benchmarks.passmark = data.passmark;
	target.benchmarks.passmark2d = data.passmark2d;

}

function joinNCData(data, target) {

	if (!target.names.includes(data.name)) target.names.push(data.name);

	// target.codeName = target.codeName || data.codeName;
	// target.architecture = target.architecture || data.architecture;
	// target.clock = target.clock || data.clockSpeed;
	// target.memoryType = target.memoryType || data.memoryType;
	// target.openGL = target.openGL || data.openGL;
	// target.directX = target.directX || data.directX;
	// target.shaderUnits = target.shaderUnits || data.shaderUnits;
	target.released = target.released || data.released;

	// TODO: merge all merformance data here
	target.benchmarks['3dMarkIceStorm'] = data['3dMarkIceStorm'];
	target.benchmarks['3dMarkCloudGateStandard'] = data['3dMarkCloudGateStandard'];
	target.benchmarks['3dMarkcCloudGate'] = data['3dMarkcCloudGate'];
	target.benchmarks['3dMarkFireStrikeScore'] = data['3dMarkFireStrikeScore'];
	target.benchmarks['3dMarkFireStrikeGraphics'] = data['3dMarkFireStrikeGraphics'];
	target.benchmarks['3dMarkTimeSpyScore'] = data['3dMarkTimeSpyScore'];
	target.benchmarks['3dMarkTimeSpyGraphics'] = data['3dMarkTimeSpyGraphics'];
	target.benchmarks['3dMark11p'] = data['3dMark11p'];
	target.benchmarks['3dMark11pgpu'] = data['3dMark11pgpu'];
	target.benchmarks['3dMark11Vantagep'] = data['3dMark11Vantagep'];
	target.benchmarks['3dMarkVantp'] = data['3dMarkVantp'];
	target.benchmarks['3dMark06'] = data['3dMark06'];
	target.benchmarks['3dMark01'] = data['3dMark01'];
	target.benchmarks.gfxBench = data.gfxBench;
	target.benchmarks.gfxBench30 = data.gfxBench30;
	target.benchmarks.gfxBench31 = data.gfxBench31;
	target.benchmarks.basemark11Med = data.basemark11Med;
	target.benchmarks.basemark11High = data.basemark11High;
	target.benchmarks.unigineHeaven30 = data.unigineHeaven30;
	target.benchmarks.unigineValley10 = data.unigineValley10;
	target.benchmarks.cinebenchR15 = data.cinebenchR15;
	target.benchmarks.cinebenchR10 = data.cinebenchR10;
	target.benchmarks.computeMark21 = data.computeMark21;
	target.benchmarks.luxMark20 = data.luxMark20;

}

function generatePerformanceScales(database) {
	const benchmarks = _.map(_.values(database), 'benchmarks')
	const keys = _.uniq(
		_.flatMap(
			benchmarks, 
			benchmark => _.filter(
				_.keys(benchmark), 
				key => benchmark[key]
			)
		)
	)

	const maxValues = {}

	_.each(keys, key => {
		maxValues[key] = _.max(
			_.map(
				database, 
				gpu => _.get(gpu, ['benchmarks', key])
			)
		)
	})

	const conversionMap = {}

	_.each(keys, key => {
		conversionMap[key] = {}

		_.each(keys, otherKey => {
			conversionMap[key][otherKey] = []


			_.each(database, gpu => {
				const benchmark1 = _.get(gpu, ['benchmarks', key])
				const benchmark2 = _.get(gpu, ['benchmarks', otherKey])
	
				if (benchmark1 && benchmark2) {
					conversionMap[key][otherKey].push(benchmark1 / benchmark2)
				}
			})

			conversionMap[key][otherKey] = _.mean(conversionMap[key][otherKey]) || null
		})
	})

	return conversionMap
}

// generate a 'performance' field based on all the benchmark data.
// If a passmark benchmark is not available then we interpolate values
// from gpus with similar benchmarks from other vendors
function generatePerformanceScore(database) {
	const referenceBenchmark = 'passmark'
	const performanceMap = generatePerformanceScales(database)

	// find all benchmark information with
	// passmark results
	const benchmarks = Object
		.values(database)
		.map(gpu => gpu.benchmarks)
		.filter(bm => bm.passmark);

	for(const name in database) {

		const gpu = database[name];
		let score = null;
		if (gpu.benchmarks.passmark) {

			score = gpu.benchmarks.passmark;

		} else {
			const scores = []

			_.each(gpu.benchmarks, (value, key) => {
				if (value) {
					scores.push(value * performanceMap.passmark[key])
				}
			})
			score = _.mean(scores)
		}

		gpu.performance = Math.round(score);
	}



}

// Iterate over all videobenchmark data and try to find any matching
// names in the associated tech powerup data. Only a single graphics card
// is considered a match.
for (const name in VB.data) {

	result[name] = getBaseObject(name);

	let vbDesc = VB.data[name];
	let tpDesc = getMatch(name, TP.data);
	let ncDesc = getMatch(name, NC.data);

	delete VB.data[name];

	if (tpDesc) joinTPData(tpDesc, result[name]);
	if (vbDesc) joinVBData(vbDesc, result[name]);
	if (ncDesc) joinNCData(ncDesc, result[name]);


}

for (const name in TP.data) {

	result[name] = getBaseObject(name);

	let vbDesc = getMatch(name, VB.data);
	let tpDesc = TP.data[name];
	let ncDesc = getMatch(name, NC.data);

	delete TP.data[name];

	if (tpDesc) joinTPData(tpDesc, result[name]);
	if (vbDesc) joinVBData(vbDesc, result[name]);
	if (ncDesc) joinNCData(ncDesc, result[name]);

}

for (const name in NC.data) {

	result[name] = getBaseObject(name);

	let vbDesc = getMatch(name, VB.data);
	let tpDesc = getMatch(name, TP.data);
	let ncDesc = NC.data[name];

	delete NC.data[name];

	if (tpDesc) joinTPData(tpDesc, result[name]);
	if (vbDesc) joinVBData(vbDesc, result[name]);
	if (ncDesc) joinNCData(ncDesc, result[name]);

}

console.log('Generating normalized performance score...');
generatePerformanceScore(result);
Object.values(result).forEach(gpu => delete gpu.benchmarks);

const filteredResults = _.filter(_.values(result), gpu => {
	if (!gpu.released) {
		return null
	}

	const date = new Date(gpu.released)
	const year = date.getFullYear()

	return gpu.performance && year > 2010
})

_.each(filteredResults, gpu => {
	delete gpu.name
	if (!gpu.vendor) {
		delete gpu.vendor
	}

	let names = []

	_.each(gpu.names, name => {
		const newNames = name.split('/')

		names.push(...newNames)
	})

	names = _.compact(names)

	gpu.names = _.map(names, name => name.replace(/^ +/gi, '').replace(/ +$/gi, ''))

	// const date = new Date(gpu.released)
	// gpu.released = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`

	delete gpu.released
})

console.log('Writing file...');
const jsonStr = JSON.stringify(filteredResults);

let filePath;
filePath = path.join(__dirname, '../data/database.json');
fs.writeFileSync(filePath, jsonStr, { encoding: 'utf8' });

filePath = path.join(__dirname, '../src/database.js');
const script =
    `const database = ${ jsonStr }\n` +
    'export { database };';
fs.writeFileSync(filePath, script, { encoding: 'utf8' });
