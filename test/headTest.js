const head   = require('../head.js');

//
// Depreciated Tests using Lotide assertion
//

/*
const assertEqual = require('../assertEqual.js');
const head = require('../head.js');
// MISC TESTS:

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// extra testing below
assertEqual(head("lobsters"), "lobsters");
assertEqual(head(""), "");
assertEqual(head(), undefined);
*/



//
// Tests using MOCHA & CHAI
//
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

});
