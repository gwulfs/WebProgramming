var express = require('express');

var app = express(express.logger());
app.use(express.logger());

// Handle request for "/" (i.e., home page)
app.get("/", function(request, response) {
  response.send("Welcome to HACKME!");
});

app.get("/pikachu", function(request, response) {
  response.send("<h1>I don't like Pokemon...</h1>");
});

app.post("/submit.json", function(request, response) {
  response.send("You've found me out!");
});

app.get("/MING_TANG_CLAN", function(request, response) {
  response.send(500);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
