//
// LHL - Lotide Library - countLetters.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/205?journey_step=30&workbook=5
// v1.0 - 2022-07-29
//


/*
FUNCTION PURPOSE:
take in a sentence (as a string) and then return a count of each of the letters in that sentence (as an object)

FUNCTION USAGE:
outputObject = countLetters(sourceString);

EXAMPLES:
outputOjbect = countLetters("lighthouse in the house");
Results:
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/
const countLetters = function(inputString) {
  let returnObject = {}, letter;

  if (!inputString) {
    return; // nothing to do
  }

  for (letter of inputString) {
    if (letter !== ' ') { // skip spaces
      if (!returnObject[letter]) { // if it's new, start count at 1
        returnObject[letter] = 1;
      } else {
        returnObject[letter] += 1; // inc the count since it exists already
      }
    }
  }
  return (returnObject);
};

module.exports = countLetters;