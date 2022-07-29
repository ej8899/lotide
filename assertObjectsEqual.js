//
// LHL - eqObjects
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/209?journey_step=30&workbook=5
//



const eqObjects = function(object1, object2) {
  let isKeyArray = false;

  // quick check for same # of object keys in each
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  // loop thru object1 - compare key & value to object2 key & value
  for (const eachKey in object1) {
    isKeyArray = Array.isArray(object1[eachKey]);

    // run basic key value checks
    if(object1[eachKey] !== object2[eachKey] && !isKeyArray) {
      return false;
    }
    // we have objects in our keys:
    if(isKeyArray) {
      // check eq arrays - return false if no match
      if(eqArrays(object1[eachKey],object2[eachKey]) === false ) {
        return false;
      }
    }
  }
  return true; // passed all the tests
};





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

const ab = { a: "1", b: "2", c:3 };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true