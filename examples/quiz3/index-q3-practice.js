var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/status.json', function(foo, bar) {
	bar.set('Content-Type', 'text/json');
	bar.send('{"status":"good"}');
});
app.post('/sendMessage', function(foo, bar) {
	msg = foo.body.msg;
	// store msg into a database
	bar.send("You sent me the message: " + msg + "\n");
});
app.get('/messages', function(foo, bar) {
	msg = foo.query.msg;
	bar.set('Content-Type', 'text/html');
	bar.send("You sent me the message: " + msg + "\n");
});
app.listen(process.env.PORT || 3000);