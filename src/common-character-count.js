const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let long,
      short;
      k =0;
      if (s1.length < s2.length) {
        long = s2;
        short = s1
      } else {
        long = s1;
        short = s2;
      }
      for (let i =0; i < s2.length; i++){
        if (s1.indexOf(s2[i]) !== -1) {
          k = k +1;
        }
      }
      console.log(k);
      return k;
}

getCommonCharacterCount("aabcc","adcaa")
module.exports = {
  getCommonCharacterCount
};
