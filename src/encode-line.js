const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = [];

  for (let i = 0; i < str.length; i++) {
    let repeat = 0;
    let newIndex = i;
    for (let j = i; j < str.length; j++) {
     if (str[i] !== str[j]) {
        break;
     }
     repeat++;
     newIndex = j;
    }
    if (repeat > 1) {
      encoded.push(`${repeat}${str[i]}`)
    } else {
      encoded.push(str[i]);
    }
    i = newIndex;
  }

  return  encoded.join('');
}

module.exports = {
  encodeLine
};
