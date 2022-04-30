const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newArr = [...arr];
  let i = 0, prevElem;
  while (true) {
    let newArrLength = newArr.length;
    if (i === newArrLength) {
      return newArr;
    }

    let current = newArr[i],
        prevIndex = i - 1,
        nextIndex = i + 1;


    if (current === '--discard-next') {
      let changeArr = [];
      for (let j = 0; j < newArrLength; j++) {
        if (j === i || j === nextIndex) {
          continue;
        }
        changeArr.push(newArr[j]);
      }
      i--;
      newArr = changeArr;
      prevElem = '--discard-next';
    } else if (current === '--double-next') {
      let changeArr = [];
      for (let j = 0; j < newArrLength; j++) {
        if (j === i) {
          if (nextIndex < newArrLength) {
            changeArr.push(newArr[j + 1]);
          }
          continue;
        }
        changeArr.push(newArr[j]);
      }
      i--;
      newArr = changeArr;
      prevElem = undefined;
    } else if (current === '--discard-prev') {
      let changeArr = [];
      for (let j = 0; j < newArrLength; j++) {
        if ((j === prevIndex && prevElem !== '--discard-next') || j === i) {
          continue;
        }
        changeArr.push(newArr[j]);
      }
      newArr = changeArr;
      prevElem = undefined;
    } else if (current === '--double-prev') {
      let changeArr = [];
      for (let j = 0; j < newArrLength; j++) {
        if (j === i) {
          if (prevIndex >= 0 && prevElem !== '--discard-next') {
            changeArr.push(newArr[j - 1]);
          }
          continue;
        }
        changeArr.push(newArr[j]);
      }
      newArr = changeArr;
      prevElem = undefined;
    }

    i++;
  }
}

//console.log(transform([1, 2, 3, '--double-next', 4, 5, '--double-next']));

module.exports = {
  transform
};
