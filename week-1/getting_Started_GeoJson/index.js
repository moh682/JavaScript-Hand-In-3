const express = require('express');
const { gameArea, players } = require('./gameData');
var gju = require('geojson-utils');
const app = express();
const colors = require('colors');

app.get('/', (req, res) => res.send('Geo Demo!'));

app.get('/geoapi/isuserinarea/:lon/:lat', function(req, res, next) {
	var { lon, lat } = req.params;
	var inArea = false;

	players.map((player) => {
		if (lon == player.geometry.coordinates[0] && lat == player.geometry.coordinates[1]) {
			inArea = true;
		}
	});
	if (inArea !== false) {
		res.json({ status: inArea, msg: 'Point was inside the tested polygon' });
	} else {
		res.json({ status: inArea, msg: 'Point was NOT inside the tested polygon' });
	}
});

app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', function(req, res, next) {
	var { lon, lat, rad } = req.params;
	let center = gju.rectangleCentroid({
		type: 'Polygon',
		coordinates: [ gameArea.features[0].geometry.coordinates ]
	});
	var radius = rad;

	players.map((player) => {
		if (gju.geometryWithinRadius(player, center, radius)) {
			console.log(colors.green('Is Within'));
		} else {
			console.log(colors.red('Is Not within'));
		}
	});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
