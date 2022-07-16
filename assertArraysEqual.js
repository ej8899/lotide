

function assertArraysEqual(arr1,arr2) {
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


assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(['a',1,'2'],1);