'use strict';

const faker = require('faker');
const greet = require('./greet');
const arithmetic = require('arithmetic');

console.log(greet.hello(faker.name.firstName()));
console.log(`The sum of values in the array is: ${arithmetic.add(testArr)}.`);
console.log(`The difference in values in the array is: ${arithmetic.subtract(testArr)}.`);
console.log(`The product of the values in the array is: ${arithmetic.multiply(testArr)}.`);
console.log(`The quotient of the values in the array is: ${arithmetic.divide(testArr)}.`);