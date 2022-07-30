const middle = require('../middle');

//
// Depreciated Tests using Lotide assertion
//
/*
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3,4]
assertArraysEqual(middle([1, 2, 3, 'b', 5,'a']),[3,'b']); // => [3,'b']
assertArraysEqual(middle('just a string'),['']); // => []
assertArraysEqual(middle([1, 2]),['']); // => []
assertArraysEqual(middle(),['']);
*/

//
// Tests using MOCHA & CHAI
//
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3,'b'] for [1, 2, 3, 'b', 5,'a']", () => {
    assert.deepEqual(middle([1, 2, 3, 'b', 5,'a']), [3,'b']); 
  });

});
