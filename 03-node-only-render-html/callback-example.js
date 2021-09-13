/*fs.readFile("hello.txt", 'utf-8', (error, data) => {
  if (error) {
    response.writeHead(404);
    response.write('File not found!');
  } else {
    response.write(data);
  }
  response.end();
});

function readFile(fileName, encoding, cb) {
   // write a logic to read a file 
   cb(null, data)

   // we found an error 
   cb(err, null)
} 

 */

const sayHi = (a, b, cb) => {
  // async stuff 
  // read a file
  // write a file 

   cb(a + b);
}


sayHi(1, 2, function (c) {
  console.log(c);
})