//
// LHL-lotide project - without.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/184?journey_step=29&workbook=4
//


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

function without(sourceArr,removeArray) {
  // ERROR CHECKING
  if(!sourceArr || !removeArray) { // nothing to do as we're missing source and/or removal arrray
    return;
  }
  if(sourceArr.length < removeArray.length) { // more problems - removal array is longer than source
    return;
  }

  // GET TO WORK



}