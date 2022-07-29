//
// LHL - Lotide Library - takeUntil.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/229?journey_step=30&workbook=5
// v1.0 - 2022-07-18
//


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

/*

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log('---');

console.log(takeUntil());  // should return undefined
console.log('---');

const data3 = [1, 'a', 5, 'safdklfd', 2, -1, 'six', 4, 5];
const results3 = takeUntil(data3, x => x === 'six');
console.log(results3);
console.log('---');

const data4 = [1, 'a', 5, 'safdklfd', 2, -1, 'six', 4, 5];
const results4 = takeUntil(data4, x => x > 2 );
console.log(results4);
console.log('---');

const data5 = [1, 'a', 5, 'safdklfd', 2, -1, 'six', 4, 5];
const results5 = takeUntil(data5, x => x === 1); // this should give EMPTY array since first is a match for "UNTIL"
console.log(results5);
console.log('---');
*/