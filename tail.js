

// FYI - brief discord discussion w Anh Le

// return an array - leaving original intact - that is everything after first element
function tail(inputArray) {
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray); // force to an array if for some reason it was a single string that passed
  }
  let newArray = inputArray.slice(1);
  
  return newArray;
}


module.exports = tail;