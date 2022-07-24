//
// lotide map.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/227?journey_step=30&workbook=5
//


// REMINDER:
// this is a build of our own MAP function - does not use built in map
//
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item)); // execute the callback function for EACH item of the array
  }

  return results;
}

/*
//
// TEST CASES:
//

// test simple string proceedure
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

// test simple math
const nums = [10,12,14,16,18];
const results2 = map(nums, num => num * 2);
console.log(results2);

// test multiple operations - single line
const fishes = ["grouper", "nurse shark", "moray eel", "parrot fish", "stingray"];
const results3 = map(fishes, word => word[0].toUpperCase() + word.slice(1) + ' are all fishes of the Carribean!');
console.log(results3);

// TEST multi-line callback
const fishez = ["groUper", "nuRse ShaRk", "mOray eel", "parRot fish", "stiNgray", "sea TuRTLES"];
const results4 = map(fishez, word => { 
  let tempWord = word.toLowerCase();
  let newWord = tempWord[0].toUpperCase() + tempWord.slice(1) + ' are all critters of the Carribean!';
  return newWord; // DONT FORGET to RETURN SOMETHING in this multi line type - it's default in single line!
});
console.log(results4);

/*
// arrow function explained
equivalent:
function (word) {
  return word[0];
}
*/
