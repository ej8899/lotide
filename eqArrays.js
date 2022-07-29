//
// LHL - Lotide Library - eqArrays.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/182?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {  // not even same length, lets avoid extra work
    return false;
  }
  for (let x = 0; x < arr1.length; x ++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;