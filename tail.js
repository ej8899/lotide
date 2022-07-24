

/*
// MISC CHECKS
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(['1','2','3']),['2','3']);
assertEqual(tail([1,2,3]),[2,3]);
assertEqual(tail("a"),null);
assertEqual(tail(),null);
assertEqual(tail([1,2,'3','four'],[2,'3','four']));

console.log(tail(1,2,'3','four'));
assertEqual(tail(['1','2','3']),['2','3']);
assertEqual(tail([1,2,3]),[2,3]);
*/

// FYI - brief discord discussion w Anh Le

// return an array - leaving original intact - that is everything after first element
function tail(inputArray) {
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray); // force to an array if for some reason it was a single string that passed
  }
  let newArray = inputArray.slice(1);
  
  return newArray;
}