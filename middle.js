//
// LHL - Lotide Library - middle.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/199?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//

/*
FUNCTION PURPOSE:
Return an array of the "middle" items of the supplied array.
Middle will be a single item if array length is odd, or middle TWO items if array is even length.

FUNCTION USAGE:
finalArray = middle(sourceArray);

EXAMPLES:
console.log(middle([1,2,3,4,5])); // shows [3]
console.log(middle([1,2,3,4,5,6])); // shows [3,4]
*/
const middle = function(array) {
  if (Array.isArray(array) === false) {
    return (['']);
  }
  if (array.length < 3) {
    return (['']);
  }
  
  let returnArray = [];
  let middleNum = parseInt(array.length / 2);

  if ((array.length % 2) === 0) { // even # items in array, so we need middle 2 items
    returnArray.push(array[middleNum - 1]); // grab the middle into new array
  }
  returnArray.push(array[middleNum]); // grab the middle into new array
  return (returnArray);
};

module.exports = middle;