//
// Tests using MOCHA & CHAI
//
const assert = require('chai').assert;
const flatten = require('../flatten.js');


describe("#findKeyByValue", () => {
  it("returns [1, 2, 3, 4, 5, 6] for object [1,2,[3,4],5,[6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
  });
});
