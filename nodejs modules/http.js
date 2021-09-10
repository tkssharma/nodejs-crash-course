//  require('http').METHODS
//  require('http').STATUS_CODES

http.createServer()
// Return a new instance of the http.Server class.

//Usage:

http.createServer((req, res) => {
  res.write('hello world');
  res.end();
  //handle every single request with this callback
}).listen(5001)
