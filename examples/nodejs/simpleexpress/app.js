// Taken from http://expressjs.com/4x/api.html
var express = require('express')
var app = express();

app.get('/', function(request, response){
  res.send("Hey now, it works");
});

app.listen(3000);
