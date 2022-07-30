//
// LHL - Lotide Library - takeUntil.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/229?journey_step=30&workbook=5
// v1.0 - 2022-07-18
//

/*
FUNCTION PURPOSE:
Build and return an array from source array data, UNITL supplied callback function conditions are met.

FUNCTION USAGE:
finalArray = takeUntil(sourceArray, callbackFunction);

finalArray is empty if any input errors.

EXAMPLES:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
*/

// returns array UNTIL supplied callback hits TRUE or undefined
const takeUntil = function(array, callbackFn) {
  let returnArray = [];
  if (!array || !callbackFn) {
    return;
  }  // quick error check for empty input/nothing to do

  for (let x = 0; x < array.length; x ++) {
    if (callbackFn(array[x])) {
      return (returnArray);
    } else {
      returnArray.push(array[x]);
    }
  }
  return (returnArray);
};

module.exports = takeUntil;
