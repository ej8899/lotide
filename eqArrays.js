//
// LHL - Lotide Library - eqArrays.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/182?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//

/*
FUNCTION PURPOSE:
Compare two arrays to see if they are equal - This does NOT compare nested arrays

FUNCTION USAGE:
result = eqArrays(arrayOne, arrayTwo);

EXAMPLES:
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {  // not even same length, lets avoid extra work
    return false;
  }
  for (let x = 0; x < arr1.length; x ++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;