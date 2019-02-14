'use strict';

const greet = require('./../greet');
const faker = require('faker');
const arithmetic = require('arithmetic');

describe('#basic.test.js', () => {
    //greet test
}
    test('should return Hello world', () => {
        const returnWorld = greet.hello('world');
        expect(returnWorld).toEqual('Hello world!');
    });
    test('should return null if not a string', () => {
        const returnNull = greet.hello(faker.random.number());
        expect(returnNull).toBeNull();
    });
//Arithmetic tests
//sum test tried to use different method--looked at H'Liana's and decided to use reduce instead
let testArr = [faker.random.number(), faker.random.number()];
test('should add values in an array of numbers.', () => {
    const add = arithmetic.sum(testArr);
    expect(add).toEqual(testArr.reduce((a, b) => a + b));
});
test('should return difference of values in an array.', () => {
    const sub = arithmetic.difference(testArr);
    expect(sub).toEqual(testArr.reduce((a, b) => a - b));
});
test('should return the product of values in an array.', () => {
    const multiply = arithmetic.product(testArr);
    expect(multiply).toEqual(testArr.reduce((a, b) => a * b));
});
test('should return the quotient of values in an array.', () => {
    const divide = arithmetic.quotient(testArr);
    expect(divide).toEqual(testArr.reduce((a, b) => a / b));
});

// ARRANGE

//ACT

//ASSERT

//ARRANGE
