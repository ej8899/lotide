//
// LHL - Lotide Library - head.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/153?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//

/*
FUNCTION PURPOSE:
Return an array of the "head" item of the supplied array.

FUNCTION USAGE:
finalArray = head(sourceArray);

EXAMPLES:
console.log(head([1,2,3,4,5])); // shows [1]
*/

const head = function(inputArray) {
  // if single item, it's just a string - let's convert to a single item array instead, otherwise system fails!
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray);
  }

  return (inputArray.shift());
};

module.exports = head;