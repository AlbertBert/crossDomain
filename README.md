# crossDomain
跨域的几种方式

做前端开发的免不了遇到跨域问题。之所以会产生跨域问题是因为浏览器设置了同源策略。
同源策略是指相同协议，相同域名以及相同端口的url之间才能通信。因此两个url之间只要有这三者其中之一不相同，相互访问的时候都会产生跨域问题。
目前跨域的主要解决方案有以下几种
* CORS(跨域资源共享)
* JSONP

## 1.CORS
CORS(跨域资源共享)是的原理是浏览器在发送ajax请求的时候，会自动在request头部中带上一个origin的参数，这个origin的参数一般就是浏览器所在的url。服务端接收到请求后，会在该请求处理之前给响应的首部加上Access-Contrl-Allow-Origin的字段，表示允许跨域访问，如果这个资源设置为'*'，就表示允许任意的url进行跨域访问，如果设置成固定的url，就表示只允许该url进行跨域访问。浏览器在接收到服务器返回的响应后，会去主动检查响应中是否带有Access-Contrl-Allow-Origin的字段，如果没有，浏览器就不会对这个请求进行响应，就当做没有请求过。如果有该字段，并且origin在这个字段范围内，就说明跨域成功。

综上说明，通过CORS实现跨域的解决方案在服务端，只要服务端给ajax请求的响应都加上Access-Contrl-Allow-Origin的字段并且该字段合适的话，浏览器就一定能够跨域。

## 2.JSONP
由于在script、img标签的src属性不会受到浏览器同源策略的影响，也就是说无论当前所在地址是多少，也可以访问src所指向的内容，因此可以通过script标签实现跨域，这就是JSONP的原理。而通过img实现跨域的方案就是图像ping技术，后面我也会提到。

一般JSONP的请求是这样的：http://localhost:3003?callback=myCallback&firstname=AlbertBert&lastname=allen 

其中callback表示此次请求的回调函数，也就是请求结束的时候会执行，这是我们事先在前端定义的，firstname=AlbertBert&lastname=allen是此次请求的相关数据。

需要注意的是，JSONP也需要服务端做以下处理
* 解析url从而获取回调函数cb以及相应数据，注意，数据必须是JSON字符串
* 服务端以javascript语法的方式，生成一段执行该回调函数的代码，参数就是上一步生成的JSON字符串，返回给浏览器
* 浏览器解析script标签，并执行返回的javascript代码，从而实现了跨域
