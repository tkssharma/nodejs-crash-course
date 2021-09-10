var http = require('http');
// commonjs module pattern 
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Http test, hello');
  module2();
  module1();
  response.end();
}

http.createServer(onRequest).listen(8006);

// Node JS modules and Module Patterns 
