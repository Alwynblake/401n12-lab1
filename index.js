'use strict';

const faker = require('faker');
const greet = require('./lib/greet');
const arithmetic = require('./lib/arithmetic');

let testArr = [faker.random.number(), faker.random.number()];

console.log(greet.hello(faker.name.firstName()));
console.log(`The sum of values in the array is: ${arithmetic.add(testArr)}.`);
console.log(`The difference in values in the array is: ${arithmetic.subtract(testArr)}.`);
console.log(`The product of the values in the array is: ${arithmetic.multiply(testArr)}.`);
console.log(`The quotient of the values in the array is: ${arithmetic.divide(testArr)}.`);