//
//  findKey.js
//  https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/230?journey_step=30&workbook=5
//  2022-07-18
//

// return FIRST instance of key that is found to match callBackFn or undefined if no matches
const findKey = function(searchObject,callbackFn) {
  if(!searchObject || !isObject(searchObject)) { return; } // basic error check & get out if it fails

  // REMEMBER: callbackFn is our callback function name!
  // example below is object.stars ===2
  for (const itemName in searchObject) {  // start the loop thru searchOjbect
    // if callbackFn returns a true, return itemName
    // console.log(searchObject[itemName].stars);  // DEBUG - do a visual dive here to see what's happening
    if(callbackFn(searchObject[itemName])) {
      return itemName;
    }
  }
}

function isObject(obj) {
  return obj != null && obj.constructor.name === "Object";  // Object / String / Array / Number return types
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


console.log(findKey({
  "nurse shark": { areas: [1,3], sightings: 1 },
  "moray eel":   { areas: [1,7], sightings: 4 },
  "lobster":      { areas: [9,1], sightings: 4 },
  "wrecks":   { areas: [2,3], sightings: 2 },
  "parrot fish":       { areas: [3,7], sightings: 2 }
}, x => x.sightings === 4)); // => "moray eel"