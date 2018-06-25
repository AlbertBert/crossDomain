var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
  res.end('我是3005端口的返回值');
})

server.listen(3005);
