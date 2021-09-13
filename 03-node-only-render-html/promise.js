var http = require('http');
var fs = require('fs');


const Promise = function () {
  // async operation 
  return Promise.resolve('Hello i am running promises');
}

function onRequest(request, response) {
  Promise.then(data => {
    console.log('logging...');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
  })
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

