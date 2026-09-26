function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  sum,
  sub,
};

const math = require("./sum");

console.log(math.sum(2, 1));
