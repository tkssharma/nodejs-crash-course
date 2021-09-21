
// all javascript 

// callback 
// promises 
// async await 

// handle async programming 

// read a file 
// write a file 
// read from database 
// write to a database 
// hitting http using axios 
// timer setTimeout, setInterval  [time]

// 1 
setTimeout(() => {
  // TBD
}, 3000)

function hello(a, b, cb) {
  // async stuff 
  fs.readFile('filename.txt', function (err, data) {
    if (err) {
      cb(err, null)
    }
    cb(null, a + b)
  })
}

hello(1, 2, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log('i have response' + data);
  }
})


function hello(a, b) {
  // async stuff 
  return axios.get('http://blabla.com')
  /*
  return new Promise((resolve, reject) => {
     resolve()
  })
  */
}

hello(1, 2).then(function (data) {
  console.log(data)
}).catch(err => {
  console.log(err);
})


/// async await 

async function sayHello() {

  try {
    const data = await hello(1, 2);
    console.log(data);
  } catch (err) {
    console.log(err)
  }

}

await hello()




function sayHi() {
  return Promise.resolve({});
  /*
  return new Promise((resolve, reject) => {
    resolve();
  })
  return axios.post('', {})
  */
}

sayHi.then(data => {

}).catch(err => {

})



function sayHi() {
  return Promise.resolve({});
  /*
  return new Promise((resolve, reject) => {
    resolve();
  })
  return axios.post('', {})
  */
}



async function sayHello() {
  try {
    const data = await sayHi();
  } catch (err) {
    console.log(err)
  }
}


const mongoose = require('mongoose');

main()

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test');
  } catch (err) {
    console.log(err);
  }
}