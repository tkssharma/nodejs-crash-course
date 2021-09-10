/*For example let’s examine the fs.rename() method. The asynchronous API is used with a callback:*/

const fs = require('fs')

console.log('hello1')
fs.readFile('before.json', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(data);
  //done
})
console.log('hello2')
//A synchronous API can be used like this, with a try/catch //block to handle errors:

const fs = require('fs')

try {
  fs.renameSync('before.json', 'after.json')
  //done
} catch (err) {
  console.error(err)
}