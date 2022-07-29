//
//  LHL - Lotide Library - flatten.js
//  https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/186?journey_step=29&workbook=4
//  v1.0 - 2022-07-18
//

// usage:
// flatten([1, 2, [3, 4], 5, [6]]) //  EXPECTED OUTPUT: [1, 2, 3, 4, 5, 6]

function flatten(inputArray) {
  let finalArray=[];

  for (let x = 0;x <= inputArray.length-1; x++) {
    // if item is array so we can do a 1st level recursion otherwise leave type as-is
    
    if(Array.isArray(inputArray[x])) {
      // recurse one level deep
      for (let y=0; y<= inputArray[x].length-1; y++) {
        finalArray.push(inputArray[x][y]);
      }
    } else {
      finalArray.push(inputArray[x]);
    }
  }
  return(finalArray);
}
module.exports = flatten;

/*
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 'a', [3, 4], 5, [6]]),[1, 'a', 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 'a', [3, 4], 5, []]),[1, 'a', 3, 4, 5]);
*/