var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  fs.createReadStream(__dirname + '/a.html').pipe(res);
})

server.listen(3009);
