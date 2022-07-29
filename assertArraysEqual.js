

const eqArrays = require('./eqArrays');

function assertArraysEqual(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + arr1 + " !== " + arr2);
  }
}



module.exports = assertArraysEqual;