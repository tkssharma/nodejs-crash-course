var http = require('http');
var fs = require('fs');
const axios = require('axios');
const url = `https://jsonplaceholder.typicode.com/posts`;
const Hello = function (str, cb) {
  // async operation 
  // making http call like axios or fetch here 
  // async call 
  axios.get(str)
    .then(data => {
      cb(null, data.data);
    })
    .catch(err => {
      cb(err, null)
    })
}
function onRequest(request, response) {
  //response.writeHead(200, { 'Content-Type': 'text/html' });
  Hello(url, function (err, data) {
    if (err) {
      console.log(err);
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.writeHead(200);
      console.log(data);
      response.write(JSON.stringify(data));
    }
    response.end()
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




// FE  =========> HTTP GET -----> 
// callback
/// timer events 
// promises
// async await 