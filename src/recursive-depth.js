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
//  */
// class DepthCalculator {
  
//   calculateDepth (arr) {
//     let k =0;
//       console.log(arr);
//       for 
      
//       if (Array.isArray(arr)) {
//          k += 1;
//          console.log(k)
//          depthCalc.calculateDepth();
//       }
    
//   }
// }


// const depthCalc = new DepthCalculator();
// // depthCalc.calculateDepth([1, 2, 3, 4, 5])
//  depthCalc.calculateDepth([1, 2, 3, [4, 5]]);

// module.exports = {
//   DepthCalculator
// };
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};