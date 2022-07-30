
const tail = require('../tail');


//
// Depreciated Tests using Lotide assertion
//
/*
const assertEqual = require('../assertEqual');

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

//
// Tests using MOCHA & CHAI
//
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

});
