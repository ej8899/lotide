//
// LHL - Lotide Library - assertArraysEqual
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/183?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + arr1 + " !== " + arr2);
  }
};

module.exports = assertArraysEqual;