//
// LHL - Lotide Library - countLetters.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/205?journey_step=30&workbook=5
// v1.0 - 2022-07-29
//

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