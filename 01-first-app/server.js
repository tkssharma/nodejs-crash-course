const http = require('http');

const callback = (request, response) => {
  // 
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World, we are learning node js');
  response.end();
}
http.createServer(callback).listen(8002);

/*
create /insert/update/delete

http get // http://localhost:3000/user/:userId  --> GET ME THIS USER WHERE userId IS == userId

http post // creating a resource at api server  http://localhost:3000/user ==> create user
           // request body
http delete  // http://localhost:3000/user/:userId  --> DELETE ITEM FROM DATABASE

http put  // http://localhost:3000/user/:userId  --> REQUEST BODY --> UPDATE USER WITH NEW DATA BY ID

http PATCH // PARTIAL UPDATE

*/