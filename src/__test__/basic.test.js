'use strict';

const faker = require('faker');
const greet = require('../../lib/greet');
const arithmetic = require('../../lib/arithmetic');

describe('Testing greet.js', () => {
  test('should return Hello world', () => {
    const returnWorld = greet.hello('world');
    expect(returnWorld).toEqual('Hello world!');
  });
  test('should return null if not a string', () => {
    const returnNull = greet.hello(faker.random.number());
    expect(returnNull).toBeNull();
  });
});

describe('Testing arithmetic.js', () => {
  let testArr = [faker.random.number(), faker.random.number()];
  test('should add values in an array of numbers.', () => {
    const add = arithmetic.add(testArr);
    expect(add).toEqual(testArr.reduce((a, b) => a + b));
  });
  test('should return difference of values in an array.', () => {
    const sub = arithmetic.subtract(testArr);
    expect(sub).toEqual(testArr.reduce((a, b) => a - b));
  });
  test('should return the product of values in an array.', () => {
    const multiply = arithmetic.multiply(testArr);
    expect(multiply).toEqual(testArr.reduce((a, b) => a * b));
  });
  test('should return the quotient of values in an array.', () => {
    const divide = arithmetic.divide(testArr);
    expect(divide).toEqual(testArr.reduce((a, b) => a / b));
  });
});
