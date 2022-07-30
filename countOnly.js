//
// LHL - Lotide Library - countOnly.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/204?journey_step=30&workbook=5
// v1.0 - 2022-07-29
//

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in the allItems array of strings.
// return is OBJECT

/*
FUNCTION PURPOSE:
Iterate through input array and return object showing count of items in an object of items to count from array.

FUNCTION USAGE:
finalObject = countOnly(sourceArray, objectOfItemsToCount);

EXAMPLES:
const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
const resultObject = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(resultObject);
*/
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;