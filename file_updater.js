var fs = require('fs'),
	jsonfile = require('jsonfile'),

	file = '../path/to/file',
	content = fs.readFileSync(file),

	jsonData = JSON.parse(content),
	objectsLength = jsonData.datasets.length,
	updatedData = []; 

console.log('STARTING...');

for (var i = 0, count = objectsLength; i < count; i++){
	var current = jsonData.datasets[i];
	current['custom_property'] = true;
	updatedData.push(current);
}

jsonData.datasets = updatedData;
jsonfile.writeFileSync(file, jsonData, {spaces: 4});
console.log('FINISHED!')
console.log(objectsLength + ' entries updated!');