var http = require('http');
http.createServer(function (request, response) {
	if (request.method === 'POST') {
		var data = '';
		request.addListener('data', function(chunk) {
			console.log("DATA RECEIVED = " + chunk);
			data += chunk;
		});
		request.addListener('end', function() {
			console.log("DATA RECEIVED END");
			try {
				eval("(" + data + ")");
			}
			catch (exception) {
				console.log(exception);
			}
		});
	}

}).listen(3000, '127.0.0.1');
console.log('Listening...');
