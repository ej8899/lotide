const assertEqual = require('../assertEqual');
const head = require('../head');
// MISC TESTS:

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// extra testing below
assertEqual(head("lobsters"), "lobsters");
assertEqual(head(""), "");
assertEqual(head(), undefined);
