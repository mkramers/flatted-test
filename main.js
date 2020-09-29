const fs = require('fs');
const {parse, stringify} = require('flatted');

// this works for 65515.json, but not 65518.json
// the structure of the 2 is very similar, however 65518 is much larger

['./65515.json', './65518.json'].forEach(fileName => {
	// the following simulates what my api is doing:
	// - read the json object from the "database"
	// - "toolData" is a "flatted" JSON object which I am trying to "un-flatted"
	let dataString = fs.readFileSync(fileName).toString('utf-8');
	let rawJson = JSON.parse(dataString);
	let {toolData} = rawJson;

	let stringified = parse(JSON.stringify(toolData));

	console.log(stringified);
});