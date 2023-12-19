const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  k =0;

  // проход по горизонтали 
  for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true)  {
        if (j === 0) {
          matrix[i][j+1] = 1;
        } 
        if (j === matrix.length) {
          matrix[i][j-1] = 1;
        }
        if (j > 0 && j < matrix.length) {
          matrix[i][j+1] = 1;
          matrix[i][j-1] = 1;
        }
        k =+1 
      } 
      }
    }
    
  //проход по вертикали 
  for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === true)  {
        if (j === 0) {
          if (matrix[j+1][i] === 1) {
            matrix[j+1][i] += 1;
          }
        } 
        if (j === matrix.length) {
          if (matrix[j-1][i]  === 1) {
            matrix[j-1][i] += 1
          };
        }
        if (j > 0 && j < matrix.length) {
          if (matrix[j-1][i] === 1) {matrix[j-1][i] +=1}
          if (matrix[j+1][i] === 1) {matrix[j+1][i] +=1}
        }
      }
    }
    }

   // если все поля false заполняем нулями , если нет то заполняем единицами оставшиеся поля
    if (k > 0) {
    for (let i = 0; i < matrix.length ; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] === true || matrix[j][i] === false) {
          matrix[j][i] = 1 ;
        }
      }
    }
  } else {
    for (let i = 0; i < matrix.length ; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          matrix[i][j] = 0 ;
        }
      }
    }
  return matrix;
}
 
minesweeper( [
   [true, false, false],
  [false, true, false],
    [false, false, false]
   ])

module.exports = {
  minesweeper
};
