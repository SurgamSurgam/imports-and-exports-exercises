const mathModule = require('./math-module.js');
const stringModule = require('./strings-module.js');
const flattenModule = require('./modules-project.js');

//Math
let getSum = mathModule.sum(4,6);
console.log(getSum);

let getMultiply = mathModule.multiply(4,4);
console.log(getMultiply);

let getDiv = mathModule.divide(10,2);
console.log(getDiv);

let getSquare = mathModule.square(8);
console.log(getSquare);

//String
let getReverse = stringModule.reverseString('andrewkil');
console.log(getReverse);

let getFirstLetter = stringModule.firstLetter('Pursuit');
console.log(getFirstLetter);

let getShout = stringModule.shout('help');
console.log(getShout);

//My Project

let getFlattened = flattenModule.myFlatten([[1,2,3],[4,5,6],[7,8,9]]);
console.log(getFlattened);
