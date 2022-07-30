//
// Mocha-Chai testing
//
const eqObjects = require('../eqObjects.js');
const assert = require('chai').assert;

// TEST OBJECTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const nestab = {a: "1", b: "2", c: { z: 1, y: 2} };
const nestabc = {a: "1", b: "2", c: { z: 1, y: 2} };

describe("#eqObjects", () => {
  it("returns true for ab to ba", () => {
    assert.deepEqual(eqObjects(ab,ba),true); 
  });

  it("returns false for ab to abc", () => {
    assert.deepEqual(eqObjects(ab,abc),false); 
  });

  it("returns true for nestab to nestabc", () => {
    assert.deepEqual(eqObjects(nestab,nestabc),true); 
  });

});