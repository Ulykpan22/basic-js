const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');

  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    let newStr = '';
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        newStr = newStr + arr[j];
      }
    }

    numbers.push(parseInt(newStr));
  }

  return Math.max(...numbers);
}


module.exports = {
  deleteDigit
};
