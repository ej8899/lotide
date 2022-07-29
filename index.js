//
// LHL - Lotide Library - index.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/371?journey_step=32&workbook=7
// v1.0 - 2022-07-29
//


// REQUIRE all files in our library for easy inclusion in other projects
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head,
  tail,
  middle,
  without,
  takeUntil,
  map,
  letterPositions,
  flatten,
  findKeyByValue,
  findKey,
  eqObjects,
  eqArrays,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual
};

// !NOTE - ES6 objects can be written short form like:
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/372?journey_step=32&workbook=7 
/*
 module.exports { 
  head // this is if the KEY name is same name as the variable to pass in.
}
*/