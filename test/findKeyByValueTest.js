//
// Tests using MOCHA & CHAI
//
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// test data
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "The A-Team",
};
whatKey = findKeyByValue(bestTVShowsByGenre,"The A-Team");

describe("#findKeyByValue", () => {
  it("returns 'action' for object search for value `The A-Team`", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre,"The A-Team"),"action");
  });
  it("returns undefined for object search for value `Walking Dead`", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre,"Walking Dead"),undefined);
  });
});
