sum = function (a, b) {
  return a + b;
}

mult = (a, b) => a * b

capitalize = (str) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1)
}

reverseString = (str) => {
  return str.split("").reverse().join("")
}

const calculator = {
  sum: (a,b) => a + b,
  sub: (a,b) => a - b,
  mult: (a,b) => a * b,
  div: (a,b) => a / b,
}

//module.exports = { sum, mult, capitalize, reverseString, calculator};
module.exports = { calculator };
//module.exports = sum;
