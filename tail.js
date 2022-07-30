//
// LHL - Lotide Library - tail.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/154?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//


/*
FUNCTION PURPOSE:
Return an array of the "tail" items of the supplied array. Tail being all array items except the first one.

FUNCTION USAGE:
finalArray = tail(sourceArray);

EXAMPLES:
console.log(tail([1,2,3,4,5])); // shows [2,3,4,5]
*/

// return an array - leaving original intact - that is everything after first element
const tail = function(inputArray) {
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray); // force to an array if for some reason it was a single string that passed
  }
  let newArray = inputArray.slice(1);
  
  return newArray;
};

module.exports = tail;