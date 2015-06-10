var express = require('express');
var path = require('path');
var app = express();

app.set('port', 80);
app.use(express.static(__dirname));

app.get('/', function (req, res) {
	'use strict';
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get(/\w*\.\.\w*/, function (req, res) {
	'use strict';
	res.end("The pattern '..' is prohibited in URLs.");
});

app.get(/\/\w*/, function (req, res) {
	'use strict';
	res.sendFile(path.join(__dirname, "public/", req.url));
});

app.listen(app.get('port'), function () {
	'use strict';
	console.log('Node app is running at port ' + app.get('port'));
});