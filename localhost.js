var express = require('express');
var app = express();

app.set('port', 80);
app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile(__dirname + req.url);
});