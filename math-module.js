const flattenModule = require('./modules-project.js');

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1/num2;
}

function square(num) {
  return num * num;
}

//My Project

let getFlattened = flattenModule.myFlatten([[1,2,3],[4,5,6],[7,8,9]]);
console.log(getFlattened);


module.exports.sum = sum;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.square = square;
