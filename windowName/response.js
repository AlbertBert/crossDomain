var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  res.end(`<h2>dawadaadad</h2>`);
})

server.listen(3007);
