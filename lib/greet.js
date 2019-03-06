'use strict';

const greet = module.exports = {};

greet.hello = (message) => {
  if(typeof message === 'string') return `Hello ${message}!`;
  else return null;
};
