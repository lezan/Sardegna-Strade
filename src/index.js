const IOData = require('./IOData.js');

const data = IOData.readJson('01_AREA_STRADALE');

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

IOData.saveJson(dataClean, 'cleanData');