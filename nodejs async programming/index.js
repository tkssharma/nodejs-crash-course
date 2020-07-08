//

// CALLBACK 
// PROMISE 
// ASYNC AWAIT 

const fs = require('fs')
let content
try {
  content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content)

//---------------
function functionTwo(var1, callback) {
  // async task 
  // once done 
    callback(var1);		
}

functionTwo(2, (x) => {
  console.log(x)
});

//----------------

const fs = require('fs')

console.log('start reading a file...')
fs.readFile('file.md', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }
  console.log(content)
})
console.log('end of the file')

function stats (file) {
  return new Promise((resolve, reject) => {
    fs.readFile('file.md', 'utf-8', function (err, content) {
      if (err) {
        reject(err)
      }
      resolve(data);
    })
  })
}

stats()
.then((data) => console.log(data))
.catch((err) => console.log(err))

const https = require('https');
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});