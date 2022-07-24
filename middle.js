
function middle(array) {
  if(Array.isArray(array) === false) {
    return (['']);
  }
  if(array.length < 3) {
    return (['']);
  }
  
  let returnArray=[];
  let middleNum=parseInt(array.length/2);

  if((array.length % 2) === 0) { // even # items in array, so we need middle 2 items
    returnArray.push(array[middleNum-1]); // grab the middle into new array
  }
  returnArray.push(array[middleNum]); // grab the middle into new array
  return(returnArray);
}



module.exports = middle;