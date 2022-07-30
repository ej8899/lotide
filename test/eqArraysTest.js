const eqArrays = require('../eqArrays');


//
// Depreciated for MOCHA-CHAI testing
//
/*
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['a',1,'2'],1),false);
assertEqual(eqArrays([],[]),true);
*/


//
// Mocha-Chai testing
//
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns false for [1, 2, 3], [3, 2, 1])'", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); 
  });

  it("returns true for [1, 2, 3], [1, 2, 3])'", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); 
  });

});