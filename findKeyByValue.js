//
//  LHL - Lotide Library - findKeyByValue.js
//  https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/207?journey_step=30&workbook=5
//  v1.0 - 2022-07-18
//

/*
FUNCTION PURPOSE:
Takein an object and a search string value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.

FUNCTION USAGE:
firstKeyFound = findKeyByValue(sourceObject, searchString);

EXAMPLES:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "The A-Team",
};
whatKey = findKeyByValue(bestTVShowsByGenre,"The A-Team");
results in "action"
*/

const isObject = function(obj) {
  return obj !== null && obj.constructor.name === "Object";  // Object / String / Array / Number return types
};

const findKeyByValue =  function(searchObject,searchKey) {
  if (!searchObject || !searchKey || !isObject(searchObject)) {
    return;
  } // basic error check & get out if it fails

  // loop thru object
  for (const category in searchObject) {
    if (searchObject[category] === searchKey) {
      return (category);
    }
  }
  return;
};

module.exports = findKeyByValue;

/*
ASSORTED TEST OPTIONS:
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue("What on Earth"), undefined);
assertEqual(findKeyByValue(), undefined);
assertEqual(findKeyByValue("not an object","The A-Team"), undefined);
assertEqual(findKeyByValue(["not an object","item2"],"The A-Team"), undefined);
assertEqual(findKeyByValue(5,"The A-Team"), undefined);

*/