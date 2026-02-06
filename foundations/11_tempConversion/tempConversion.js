// console.log("test");

const convertToCelsius = function(tempFahrenheit) {
  return Math.round(((tempFahrenheit - 32) * 5/9) * 10) / 10;
  
};

const convertToFahrenheit = function(tempCelcius) {
  return Math.round((tempCelcius * 9/5 + 32) * 10) / 10;
};

// console.log("test");

// console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// x °C ≘ (x × ⁠9/5⁠ + 32) °F 	x °F ≘ (x − 32) × ⁠5/9⁠ °C 
