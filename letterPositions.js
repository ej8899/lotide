//
// LHL - Lotide Library - letterPositions.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/206?journey_step=30&workbook=5
// v1.0 - 2022-07-29
//

const letterPositions = function(sentence) {
  const results = {};
  let letter;

  // quick error check (empty input)
  if (!sentence) {
    return (results); // nothing to do
  }

  // loop thru each letter in the input
  for (let x = 0; x <= sentence.length - 1; x ++) {
    letter = sentence.charAt(x); // grab the 'letter' (x will be our index point)

    if (letter !== ' ') { // skip spaces
      if (!results[letter]) { // if it's new, start an array with the first index of letter found
        results[letter] = [x];
      } else { // add to the index array of this letter
        results[letter].push(x);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

/*
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
*/
/* example output with letterPositions ("lighthouse in the house");
// SKIP spaces, but they
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/