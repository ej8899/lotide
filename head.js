


function head(inputArray) {
  // if single item, it's just a string - let's convert to a single item array instead, otherwise system fails!
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray);
  }

  return(inputArray.shift());
}


module.exports = head;