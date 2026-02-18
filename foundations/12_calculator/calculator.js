const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let summation = 0;
  for (number of arr) {
    summation += number;
  }
  return summation;
};

const multiply = function(arr) {
  let result = 1;
  for (number of arr) {
    result *= number;
  }
  return result;
};

const power = function(base, exponent) {
  let result = base;

  while (exponent > 1) {
    result = result * base;
    exponent--;
  }
  return result;
};

const factorial = function(num) {
  let result = 1
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
