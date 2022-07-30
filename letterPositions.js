//
// LHL - Lotide Library - letterPositions.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/206?journey_step=30&workbook=5
// v1.0 - 2022-07-29
//

/*
FUNCTION PURPOSE:
take in a sentence (as a string) and then return an object showing each letter and index position of each letter

FUNCTION USAGE:
outputObject = letterPositions(sourceString);

EXAMPLES:
finalObject = letterPositions("hello");

Results:
{
  h: 0,
  e: 1,
  l: [2,3],
  o: 4
}
*/

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

