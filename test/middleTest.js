const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3,4]
assertArraysEqual(middle([1, 2, 3, 'b', 5,'a']),[3,'b']); // => [3,'b']
assertArraysEqual(middle('just a string'),['']); // => []
assertArraysEqual(middle([1, 2]),['']); // => []
assertArraysEqual(middle(),['']);