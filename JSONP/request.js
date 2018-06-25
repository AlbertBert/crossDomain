var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  fs.createReadStream(__dirname + '/index.html').pipe(res);
})

server.listen(3002);
