var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ASSUME: code to connect to a MongoDB here
app.get('/index.html', function(hoho, haha) {
	haha.set('Content-Type', 'text/html');
	retVal = "<h1>This is slimy!</h1>";
	// ASSUME: Append all documents in MongoDB collection named
	//         "votes" to "retVal" here
	haha.send(retVal);
});
app.get('/foo.json', function(hoho, haha) {
	haha.set('Content-Type', 'application/json');
	haha.send(hoho.query);
});
app.get('/bar', function(hoho, haha) {
	haha.set('Content-Type', 'text/html');
});
app.post('/doo', function(hoho, haha) {
	vote = hoho.body.vote;
	// ASSUME: insert vote into a MongoDB collection named "votes" here
	haha.send(200);
});
app.get('/dah', function(hoho, haha) {
	hoho.send(200);
});
app.listen(process.env.PORT || 3000);