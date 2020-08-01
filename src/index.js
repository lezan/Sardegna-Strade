const IOData = require('./IOData.js');

const data = IOData.readJson('01_AREA_STRADALE');

console.log(data.features.length);

const dataClean = {
	type: 'FeatureCollection',
	features: [],
};

dataClean.features = data.features.map((d) => ({ 
	type: 'Feature',
	geometry: {
		type: 'Polygon',
		coordinates: d.geometry.coordinates,
	},
	properties: {
		AR_STR_CF: d.properties.AR_STR_CF,
	},
}));

console.log(dataClean.features.length);

IOData.saveJson(dataClean, 'cleanData');

console.log(dataClean);