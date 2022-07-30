//
// Mocha-Chai testing
//
const eqArrays = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects, () => {
  it("returns false for [1, 2, 3], [3, 2, 1])'", () => {
    assert.deepEqual(eqObjects([1, 2, 3], [3, 2, 1]),false); 
  });

  it("returns true for [1, 2, 3], [1, 2, 3])'", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); 
  });

});