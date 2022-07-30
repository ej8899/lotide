# LHL - Lotide Javascript Function Library
**Version 1.0**

The LHL Lotide project is inspired by the [Lodash](https://lodash.com/) project, which is a utility library for JavaScript. While Lodash itself is quite powerful, our version of it is simpler in order to focus on learning the fundamentals of programming and data management using JavaScript.

![Lotide Javascript Library](./image-lotideTitle2.jpg)

## Purpose

**This project was created and published by me as part of my learnings at Lighthouse Labs only.  It was published only for learning purposes. It is _not_ intended for use in production-grade software.**

---

## Lotide Included Fuctions:

### String Related:
- [x] `countLetters.js` - returns the number of each letter within the string
- [x] `letterPositions.js` - takes in a string and returns all indices of letter positions in the string

### Array Related:
- [x] `countOnly.js` - returns an object with the number of occurences of search items marked as true in the array
- [x] `eqArrays.js` - deep comparison to see if two arrays are equal
- [x] `flatten.js` - takes in nested arrays as input and returns flattened array as output
- [x] `head.js` - returns the first element of an array
- [x] `map.js` - takes in an array and a callback function then returns a new array based on the results of the callback function on each item in the array
- [x] `middle.js` - returns the middle element of an array
- [x] `tail.js` - returns the array elements without first element (the tail)
- [x] `takeUntil.js` - takes in an array and callback function and returns a slice of the array based on the criteria specified in the callback function
- [x] `without.js` - return a subset of a given array, removing unwanted elements

### Object Related:
- [x] `eqObjects.js` - deep comparison to see if two object are equal
- [x] `findKey.js` - takes an object and a callback function then returns the first key that meets the criteria specified in the callback function
- [x] `findKeyByValue.js` - takes in an object and a value. It scans object and returns the first key which contains the given value

### Assertion Functions:
- [x] `assertEqual.js` - tests the equality of two given values
- [x] `assertArraysEqual.js` - tests the equality of two arrays
- [x] `assertObjectsEqual.js` - tests the equality of two objects  

_Note these are depreciated due to the incorporation of Mocha-Chai testing._

### Other Included Files:
- [x] `index.js` - all modules for easy inclusion in your projects
- [x] `zTitle.js` - simple ASCII art title page (no functionality)


## Getting Started:
**Install it from your project directory:**

`npm install @ej8899/lotide`

**Require it in your .js file:**

`const _ = require('@ej8899/lotide');`

**Call it within your .js file:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
## Usage:
Each Lotide function has it's own input parameters, and output (return) conditions.   It is encouraged that you review each Lotide library function file to learn more about each function along with the required inputs and the expected outputs.  A "purpose", "usage" and "example" is included in each function file.

## Future Ideas:
- [ ] `demo.js` - create demo of functions for example purposes
