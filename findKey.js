//
//  findKey.js
//  https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/230?journey_step=30&workbook=5
//  2022-07-18
//

// return first instance of key that is found to match callBackFn 
const findKey = function(searchObject,callbackFn) {
  if(!searchObject || !isObject(searchObject)) { return; } // basic error check & get out if it fails

}
function isObject(obj) {
  return obj != null && obj.constructor.name === "Object";  // Object / String / Array / Number return types
}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"