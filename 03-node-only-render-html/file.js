// cli app
// rest apis
// read and write to a file 
// background processing 
// and many more ... 

const fs = require('fs');
// fs.readFile( filename, encoding, callback_function )

console.log("hello world"); // execution 
console.log("hello world"); // execution 

// async 
fs.readFile("hello.txt", 'utf-8', (err, data) => {
  console.log(data);
})
// execution 
console.log("hello world");
// execution 
console.log("hello world");

// NODE JS IS non io blocking 
//node js running on single thread 