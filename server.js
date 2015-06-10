var express = require('express');
var app = express();

app.set('port', 80);
app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get(/\/public\/*/, function (req, res) {
	res.sendFile(__dirname + req.url);
});

app.listen(app.get('port'), function () {
	console.log('Node app is running at port ' + app.get('port'));
});