var http = require('http');
var fs = require('fs');


// fs.readFile
// V8 RUNTIME ENGINE [CHROME]
// LIBUV LIBRARY [EVENT LOOP, EVENT QUEUE, CALLBACKS ]
// 1000 REQUEST 
function onRequest(request, response) {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  fs.readFile("hello.txt", 'utf-8', (error, data) => {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

function onRequest(request, response) {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  setTimeout(() => {
    response.writeHead(200);
    response.write('File not found!');
  }, 3000)
}

http.createServer(onRequest).listen(8000);

// REQUEST 1 CAME --->  CALLBACK  --> LIBUV --> EVENT QUEUE [1000] --> POP ITEM FROM QUEUE AND STARTS PROCESSING 
// REQUEST 1 --> CALLBACK MEANS WILL TAKE TIME --> 
// REQUEST 2 ---> CALLBACK --> WAIT HERE I AM GOING NEXT --> 


// REQUEST 1 ==> CALLBACK PROCESSED --> SEND REPLY BACK 
// REQUEST 1 ==> CALLBACK PROCESSED --> SEND REPLY BACK 
// REQUEST 1 ==> CALLBACK PROCESSED --> SEND REPLY BACK 
// REQUEST 1 ==> CALLBACK PROCESSED --> SEND REPLY BACK 
// REQUEST 1 ==> CALLBACK PROCESSED --> SEND REPLY BACK 
// REQUEST 1 ==> CALLBACK PROCESSED --> SEND REPLY BACK 

