var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plan'});
  response.end('casdssds')
}).listen(8888);
console.log('running at http://1111')
