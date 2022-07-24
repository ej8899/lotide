//
// assertEqual(actual,expected) - compares via actual equal vs coercion & logs output to console only
// part of lotide library.
// 2022-07-13
//

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

module.exports = assertEqual;