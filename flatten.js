//
// lotide project - flatten.js
//

// usage:
// flatten([1, 2, [3, 4], 5, [6]]) //  EXPECTED OUTPUT: [1, 2, 3, 4, 5, 6]


function flatten(inputArray) {
  let finalArray=[];

  for (let x = 0;x <= inputArray.length-1; x++) {
    // if if item is array so we can do a 1st level recursion otherwise leave type as-is
    console.log('FINAL so far:'+finalArray);
    if(Array.isArray(inputArray[x])) {
      // recurse one level deep
      console.log('FOUND NESTED ARRAY:'+inputArray[x]);
      for (let y=0; y<= inputArray[x].length-1; y++) {
        finalArray.push(inputArray[x][y]);
      }
    } else {
      finalArray.push(inputArray[x]);
    }
  }
  return(finalArray);
}









