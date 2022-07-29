//
// LHL - Lotide Library - head.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/153?journey_step=29&workbook=4
// v1.0 - 2022-07-29
//


function head(inputArray) {
  // if single item, it's just a string - let's convert to a single item array instead, otherwise system fails!
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray);
  }

  return(inputArray.shift());
}

module.exports = head;