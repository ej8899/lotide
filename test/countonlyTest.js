//
// Tests using MOCHA & CHAI
//
const assert = require('chai').assert;
const countOnly = require('../countOnly');

// run the test separately for results
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 2 for Fang", () => {
    assert.deepEqual(result1["Fang"], 2); 
  });
});
