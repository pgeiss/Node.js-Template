var express = require('express');
var path = require('path');
var app = express();

app.set('port', 8080);
app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html'), function (err) {
		if (err) {
			console.log(err);
			res.status(err.status).send("Oops. Something unexpected happened \
				-- error " + err.status + ".");
		}
		else {
			//Nothing
		}
	});
});

app.get(/\w*\.\.\w*/, function (req, res) {
	res.end("The pattern '..' is prohibited in URLs.");
});

app.get(/\/\w*/, function (req, res) {
	res.sendFile(path.join(__dirname, "public/", req.url), function (err) {
		if (err) {
			console.log(err);
			res.status(err.status).send("Oops. Something unexpected happened \
				-- error " + err.status + ".");
		}
		else {
			//Nothing
		}
	});
});

app.listen(app.get('port'), function () {
	console.log('Node app is running at port ' + app.get('port'));
});