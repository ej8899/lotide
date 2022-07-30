//
// LHL - Lotide Library - eqObjects.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/208?journey_step=30&workbook=5
/// v1.0 - 2022-07-29
//

const eqArrays = require('./eqArrays');

/*
FUNCTION PURPOSE:
Compare two objects to see if they are equal - includes objects with arrays

FUNCTION USAGE:
result = eqObjects(objectOne, objectTwo);

EXAMPLES:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
*/

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let isKeyArray = false;

  // quick check for same # of object keys in each
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // tests stage 2:
  // loop thru object1 - compare key & value to object2 key & value
  for (const eachKey in object1) {
    isKeyArray = Array.isArray(object1[eachKey]);

    // run basic key value checks
    if (object1[eachKey] !== object2[eachKey] && !isKeyArray) {
      return false;
    }
    // we have objects in our keys:
    if (isKeyArray) {
      // check eq arrays - return false if no match
      if (eqArrays(object1[eachKey],object2[eachKey]) === false) {
        return false;
      }
    }
  }
  return true; // passed all the tests
};

module.exports = eqObjects;

/*
// MORE EXAMPLES:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

// quick test for size of object (# of keys)
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
*/

/*
// test for arrays in objects
const ab = { a: "1", b: "2", c: [2,3] };
const ba = { b: "2", a: "1", c: [2,4] };
console.log(eqObjects(ab, ba)); // => false
*/

/*
// test for arrays in objects
const ab = { a: "1", b: "2", c: [2,3] };
const bc = { b: "2", a: "1", c: [2,3] };
console.log(eqObjects(ab, bc)); // => true
*/