//
//  LHL - Lotide Library - findKey.js
//  https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/230?journey_step=30&workbook=5
//  v1.0 - 2022-07-18
//

/*
FUNCTION PURPOSE:
scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.

FUNCTION USAGE:
firstKey = findKey(sourceObject, callbackFunction);

EXAMPLES:
console.log(findKey({
  "nurse shark": { areas: [1,3], sightings: 1 },
  "moray eel":   { areas: [1,7], sightings: 4 },
  "lobster":      { areas: [9,1], sightings: 4 },
  "wrecks":   { areas: [2,3], sightings: 2 },
  "parrot fish":       { areas: [3,7], sightings: 2 }
}, x => x.sightings === 4)); // => "moray eel"
*/

const isObject = function(obj) {
  return obj !== null && obj.constructor.name === "Object";  // Object / String / Array / Number return types
};

// return FIRST instance of key that is found to match callBackFn or undefined if no matches
const findKey = function(searchObject,callbackFn) {
  if (!searchObject || !isObject(searchObject)) {
    return;
  } // basic error check & get out if it fails

  // REMEMBER: callbackFn is our callback function name!
  // example below is object.stars ===2
  for (const itemName in searchObject) {  // start the loop thru searchOjbect
    // if callbackFn returns a true, return itemName
    // console.log(searchObject[itemName].stars);  // DEBUG - do a visual dive here to see what's happening
    if (callbackFn(searchObject[itemName])) {
      return itemName;
    }
  }
};

module.exports = findKey;