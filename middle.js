
function middle(array) {
  if(Array.isArray(array) === false) {
    return (['']);
  }
  if(array.length < 3) {
    return (['']);
  }
  
  let returnArray=[];
  let middleNum=parseInt(array.length/2);

  if((array.length % 2) === 0) { // even # items in array, so we need middle 2 items
    returnArray.push(array[middleNum-1]); // grab the middle into new array
  }
  returnArray.push(array[middleNum]); // grab the middle into new array
  return(returnArray);
}




function assertArraysEqual(arr1,arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    console.log("❌ Assertion Failed: No array to check");
    return;
  }
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + arr1 + " !== " + arr2);
  }
}


// input actual, expected
function eqArrays(arr1,arr2) {
  if(arr1.length !== arr2.length) {  // not even same length, lets avoid extra work
    return false; 
  }
  for(let x=0; x <arr1.length; x++) {
    if(arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
}








assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3,4]
assertArraysEqual(middle([1, 2, 3, 'b', 5,'a']),[3,'b']); // => [3,'b']
assertArraysEqual(middle('just a string'),['']); // => []
assertArraysEqual(middle([1, 2]),['']); // => []
assertArraysEqual(middle(),['']);


