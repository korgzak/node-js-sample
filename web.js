var express = require('express');
var fs = require ('fs');
var app = express();
app.use(express.logger());

var buff = new Buffer (50);
buff = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
