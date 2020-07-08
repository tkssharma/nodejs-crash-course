/*For example let’s examine the fs.rename() method. The asynchronous API is used with a callback:*/

const fs = require('fs')

fs.rename('before.json', 'after.json', (err) => {
  if (err) {
    return console.error(err)
  }

  //done
})
//A synchronous API can be used like this, with a try/catch //block to handle errors:

const fs = require('fs')

try {
  fs.renameSync('before.json', 'after.json')
  //done
} catch (err) {
  console.error(err)
}