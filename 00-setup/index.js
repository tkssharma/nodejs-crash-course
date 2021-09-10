// core modules 
// external modules 
// user defined modules 
const { factorial } = require('./factorial');

function hello() {
  const number = process.argv[2];
  console.log(process.argv)
  // console.log(process)
  const out = factorial(number)
  console.log(out)
}

hello();