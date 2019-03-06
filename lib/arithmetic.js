'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (array) => {
  return array.reduce((a,b) => a + b);
};

arithmetic.subtract = (array) => {
  return array.reduce((a, b) => a - b);
};

arithmetic.multiply = (array) => {
  return array.reduce((a, b) => a * b);
};
arithmetic.divide = (array) => {
  return array.reduce((a, b) => a / b);
};
