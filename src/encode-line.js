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
  // throw new NotImplementedError('Not implemented');
  strArr = str.split('');
  let item_temp = '';
  let rezArr = [];
  let count = 1;
  let k = 0;
  for (let i = 0; i < strArr.length; i++) {
    item_temp = strArr[i];
    if ((strArr[i+1]) == item_temp) {
      count = count + 1;
    } else {
      if (count > 1) {
      rezArr[k] = count;
      rezArr[k+1] = strArr[i];
      k = k + 2;
      count = 1;
      } else  {
        rezArr[k] = strArr[i];
        k = k + 1;
        count = 1;
      }
      
    }
  }
return rezArr.join('');
}

module.exports = {
  encodeLine
};
