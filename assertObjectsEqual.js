//
// LHL - Lotide Library - index.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/209?journey_step=30&workbook=5
// v1.0 - 2022-07-29
//

// DEPRECIATED FUNCTION with mocha-chai testing

const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const eqstatus = eqObjects(actual,expected);

  if (eqstatus) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + inspect(actual) + " !== " + inspect(expected));
  }
};

module.exports = assertObjectsEqual;

/*
const ab = { a: "1", b: "2", c:3 };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
*/