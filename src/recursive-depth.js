const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(...arr) {
      let l = arr.length;
      for (let i=0 ; i < l; i++) {
          if (Array.isArray(arr[i])) {
              l += deepCount(arr[i]);
          }
      }
      return l;
  }
}

module.exports = {
  DepthCalculator
};
