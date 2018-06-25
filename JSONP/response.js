var http = require('http');

// 从url中获取callback和相应的参数
function fetchQuery(url) {
  var callback;
  var resData = {};
  var query = url.split('?')[1];
  var argsArr = query.split('&');
  for (var i=0 ;i< argsArr.length; i++) {
    var arr = argsArr[i].split('=');
    if (arr[0] != 'callback') {
      resData[arr[0]] = arr[1];
    } else {
      callback = arr[1];
    }
  }
  return {
    callback,
    resData
  };
}

var server = http.createServer(function(req, res) {
  var {callback, resData} = fetchQuery(req.url);
  console.log(callback, resData);
  res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
  //服务端一般返回callback(obj)的形式
  res.end(callback + '(' + JSON.stringify(resData) + ')');
})

server.listen(3003);
