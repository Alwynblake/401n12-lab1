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
// ARRANGE

//ACT

//ASSERT

//ARRANGE
