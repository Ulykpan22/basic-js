const { NotImplementedError } = require('../extensions/index.js');
const {truncateThreshold} = require("chai/lib/chai/config");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};

  return names.map(item => {
    let count = 0;
    if (item in obj) {
      count = obj[item];
    }

    obj[item] = count + 1;

    if (count === 0) {
      return item;
    }

    for (let key in obj) {
      if (key === item && obj[key] === count) {
        count++;
      }
    }

    obj[`${item}(${count})`] = 1;

    return `${item}(${count})`;
  });
}

module.exports = {
  renameFiles
};
