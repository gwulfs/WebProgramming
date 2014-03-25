var express = require('express');

// DEPRECATED!
//var app = express.createServer(express.logger());
var app = express(express.logger());
app.use(express.logger());

app.get('/', function(request, response) {
	response.send('Hello World!');
});

app.get('/foo', function(request, response) {
	response.send('FLAG: Cheer Up Sleepy Jean!');
});

app.get('/bar', function(request, response) {
	response.redirect('http://google.com');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
