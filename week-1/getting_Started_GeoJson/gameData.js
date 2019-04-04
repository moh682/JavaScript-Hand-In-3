const gameArea = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			properties: {},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[ 12.557029724121094, 55.80489898428582 ],
					[ 12.534198760986328, 55.796263436639116 ],
					[ 12.536602020263672, 55.7742558445822 ],
					[ 12.576427459716797, 55.77020045842601 ],
					[ 12.593164443969727, 55.78883243833443 ],
					[ 12.583122253417969, 55.80267997611536 ],
					[ 12.557029724121094, 55.80489898428582 ]
				]
			}
		}
	]
};

const players = [
	{
		type: 'Feature',
		properties: { name: 'Peter' },
		geometry: {
			type: 'Point',
			coordinates: [ 12.564926147460938, 55.79983367179713 ]
		}
	},
	{
		type: 'Feature',
		properties: { name: 'Kurt' },
		geometry: {
			type: 'Point',
			coordinates: [ 12.542181015014648, 55.79221034059 ]
		}
	},
	{
		type: 'Feature',
		properties: { name: 'Jacob' },
		geometry: {
			type: 'Point',
			coordinates: [ 12.591361999511719, 55.788735922537114 ]
		}
	},
	{
		type: 'Feature',
		properties: { name: 'Niels' },
		geometry: {
			type: 'Point',
			coordinates: [ 12.571277618408203, 55.79563619936199 ]
		}
	},
	{
		type: 'Feature',
		properties: { name: 'Kasper' },
		geometry: {
			type: 'Point',
			coordinates: [ 12.577800750732422, 55.77367652953477 ]
		}
	},
	{
		type: 'Feature',
		properties: { name: 'Adam' },
		geometry: {
			type: 'Point',
			coordinates: [ 12.54312515258789, 55.782848006688226 ]
		}
	}
];
module.exports = {
	gameArea,
	players
};
