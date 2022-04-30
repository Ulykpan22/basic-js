const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS00PLUS00PLUS ** STRING PLUS00PLUS00PLUS ** STRING PLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator,
      repeatTimes = options.repeatTimes,
      addition = options.addition,
      additionSeparator = options.additionSeparator,
      additionRepeatTimes = options.additionRepeatTimes;

  if (typeof addition === 'undefined') {
    addition = '';
  }


  if (typeof str !== 'string' || typeof addition !== 'string') {
    str = '' + str;
    addition = '' + addition;
  }

  if (!separator) {
    separator = '+';
  }

  if (!additionSeparator) {
    additionSeparator = '|';
  }

  if (!repeatTimes) {
    repeatTimes = 0;
  }

  if (!additionRepeatTimes) {
    additionRepeatTimes = 0;
  }

  let sumAddition = '';
  for (let i = 1; i <= additionRepeatTimes; i++) {
    console.log('additionRepeatTimes')
    sumAddition = sumAddition + addition + (i === additionRepeatTimes ? '' : additionSeparator);
  }
  if (!sumAddition) {
    sumAddition = addition;
  }

  let sumStr = '';
  for (let i = 1; i <= repeatTimes; i++) {
    console.log('repeatTimes')
    sumStr = sumStr + str + sumAddition + (i === repeatTimes ? '' : separator);
  }
  if (!sumStr) {
    sumStr = str + sumAddition;
  }

  return sumStr;
}

repeater('STRING', { separator: '**',
  addition: 'PLUS',  additionSeparator: '00' });

module.exports = {
  repeater
};
