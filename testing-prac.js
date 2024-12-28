const sum = function (a, b) {
  return a + b;
};

//mult = (a, b) => a * b
function mult(a, b) {
  return a * b;
}

const capitalize = (str) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};

const cypher = (str, key) => {
  let letArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";
  // const key = 3;
  let index = 0;
  let tempArr = str.split("");
  for (let i = 0; i < tempArr.length; i++) {
    console.log(tempArr[i]);
    console.log(letArr.indexOf(tempArr[i]));
    console.log(tempArr);
    if (isUpperCase(tempArr[i])) {
      index = letArr.indexOf(tempArr[i].toLowerCase());
      newStr = newStr + letArr[(index + key) % 26].toUpperCase();
    } else {
      index = letArr.indexOf(tempArr[i]);
      newStr = newStr + letArr[(index + key) % 26];
    }
  }

  return newStr;
};

const calculator = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
};

const arrayAnal = (array) => {
  
  const sum = array.reduce((current, previous) => {
    return current + previous;
  });

  const average = sum / array.length;

  const min = array.reduce((current, previous) => {
    return (current>previous)?previous:current;
  });

  const max = array.reduce((current, previous) => {
    return (current>previous)?current:previous;
  });

  const length = array.length;
  
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
};

module.exports = {
  sum,
  mult,
  capitalize,
  reverseString,
  cypher,
  calculator,
  arrayAnal,
};
//module.exports = { mult, calculator };
//module.exports = sum;
