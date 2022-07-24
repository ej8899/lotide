//
// lotide library - countOnly.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w2/activities/204?journey_step=30&workbook=5
//

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in the allItems array of strings.
// return is OBJECT
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);

    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
 
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  console.log(results);
  return results;
}



/*


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/