//
// LHL-lotide project - without.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w1/activities/184?journey_step=29&workbook=4
//

/*
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1,2])); // => [3]
console.log(without([1, -22, 3, 'fish','dolphin','robot'], [1,2,'robot',3])); // => [-22,'fish','dolphin']
*/

function without(sourceArr,removeArr) {
  // ERROR CHECKING
  if(!sourceArr || !removeArr) { // nothing to do as we're missing source and/or removal arrray
    return;
  }

  // GET TO WORK
  let returnArray=[];
  let x,y,conflict = 0;

  for (x = 0; x < sourceArr.length; x++) { // Loop thru SOURCE
    // console.log('\nworking on source:'+sourceArr[x]);

    for (y = 0; y < removeArr.length; y++) { // loop thru CONFLICT
      // console.log('eval:'+sourceArr[x]+'|'+removeArr[y]+'(conflict items)');
      if(sourceArr[x] === removeArr[y]) {
        // console.log('source:'+sourceArr[x]+' FOUND CONFLICT:'+removeArr[y]);
        conflict=1;
      }
    }

    if(conflict===0) {
      // console.log('no conflict, add source to new array:'+sourceArr[x]);
      returnArray.push(sourceArr[x]);
    } else {
      conflict=0;
    }
  }

  return (returnArray);
}