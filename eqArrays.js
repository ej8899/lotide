

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




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};



assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['a',1,'2'],1),false);
assertEqual(eqArrays([],[]),true);