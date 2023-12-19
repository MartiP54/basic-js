const { NotImplementedError } = require('../extensions/index.js');

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
  console.log(n);
  let strTemp = ""+n;
  let arrTemp = [];
  for (let i = 0; i < strTemp.length; i++) {
    arrTemp.push(Number((strTemp.replace(strTemp[i],''))));
  }
  function bigNumber(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
  }
  arrTemp = arrTemp.sort(bigNumber);
  return arrTemp[arrTemp.length -1];
}
deleteDigit()
module.exports = {
  deleteDigit
};
