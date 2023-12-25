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
 */

let count = 0;
class DepthCalculator {
  calculateDepth(arr) {
    let isArray = arr.some (item => Array.isArray(item));
    if (isArray) {
      arr = arr.flat();
      count = count + 1;
      this.calculateDepth(arr);
      return count +1;
    } else {
      console.log(count +1);
      return count + 1;
    }
  }
  
}


module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();