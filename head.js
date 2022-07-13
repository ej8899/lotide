const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`); // NOTE use of template literal here -- use back ticks to 'engage'
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};


function head(inputArray) {
  // if single item, it's just a string - let's convert to a single item array instead, otherwise system fails!
  if (!Array.isArray(inputArray)) {
    inputArray = new Array(inputArray);
  }

  return(inputArray.shift());
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// extra testing below
assertEqual(head("lobsters"), "lobsters");
assertEqual(head(""), "");
assertEqual(head(), undefined);
