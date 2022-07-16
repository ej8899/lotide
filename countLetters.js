//
//
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/205?journey_step=30&workbook=5
//

function countLetters(inputString) {
  returnObject={};

  if(!inputString) {
    return; // nothing to do 
  }

  for (letter of inputString) {
    if(letter !== ' ') { // skip spaces
      if(!returnObject[letter]) { // if it's new, start count at 1
        returnObject[letter] = 1;
      } else {
      returnObject[letter]+=1; // inc the count since it exists already
      }
    }
  }

  return(returnObject);
}




// TEST CASES
/*
console.log(countLetters('LHL'));
console.log(countLetters('lighthouse in the house'));
console.log(countLetters('l1ghth0uS3 in the h0us3'));
*/
/*
assertArraysEqual(countLetters('LHL'),{ L: 2, H: 1 });
assertArraysEqual(countLetters('lighthouse in the house'),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
assertArraysEqual(countLetters('l1ghth0uS3 in the h0us3'),{
  '0': 2,
  '1': 1,
  '3': 2,
  l: 1,
  g: 1,
  h: 4,
  t: 2,
  u: 2,
  S: 1,
  i: 1,
  n: 1,
  e: 1,
  s: 1
});
*/


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