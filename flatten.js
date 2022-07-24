//
// lotide project - flatten.js
//

// usage:
// flatten([1, 2, [3, 4], 5, [6]]) //  EXPECTED OUTPUT: [1, 2, 3, 4, 5, 6]


function flatten(inputArray) {
  let finalArray=[];

  for (let x = 0;x <= inputArray.length-1; x++) {
    // if if item is array so we can do a 1st level recursion otherwise leave type as-is
    
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

/*
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 'a', [3, 4], 5, [6]]),[1, 'a', 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 'a', [3, 4], 5, []]),[1, 'a', 3, 4, 5]);
*/







