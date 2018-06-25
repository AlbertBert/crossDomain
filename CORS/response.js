var http = require('http');

var server = http.createServer(function(req, res) {
  //这里给响应加上Access-Control-Allow-Origin的头部信息，如果不加，
  //请求还是会取到response，但是浏览器会检查response中是否有Access-Control-Allow-Origin
  //字段，如果没有，浏览器就当没有请求过，也就不会做任何渲染。
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
  res.end('我是3001端口的返回值');
})

server.listen(3001);
