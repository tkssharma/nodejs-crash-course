function factorial(n) {
  let out = 1;
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    out = out * i;
  }
  return out;
}

module.exports = { factorial }