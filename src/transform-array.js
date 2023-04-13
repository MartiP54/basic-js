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
  let rez = [];
 if  ( !Array.isArray(arr) || arr == null ) {
  console.log('no array');
  throw ( new Error("'arr' parameter must be an instance of the Array!") );
 }

 for (let i=0; i < arr.length; i++) {

  if (arr[i] === '--discard-prev') {
    if (i === 0) {
      rez = rez.concat(arr.slice(1,arr.length));
    } else {
    rez = rez.concat(arr.slice(0,i-1), arr.slice(i+1,arr.length));
    }
    return rez;
  }
  if (arr[i] === '--double-prev') {
    if (i === 0) {
      rez = rez.concat(arr.slice(1,arr.length));
    } else {
    rez = rez.concat(arr.slice(0,i),arr.slice(i-1,i),arr.slice(i+1,arr.length));
  }
  console.log(rez);
  return rez;
}
  if (arr[i] == '--double-next') {
    if (i === (arr.length-1)) {
      rez = rez.concat(arr.slice(0,arr.length-1));
    } else {
    rez = rez.concat(arr.slice(0,i), arr.slice(i+1,i+2),arr.slice(i+1,arr.length));
  }
  return rez;
}

  if (arr[i] === '--discard-next') {
    if (i === (arr.length-1)) {
      rez = rez.concat(arr.slice(0,arr.length-1));
    } else {
    rez = rez.concat(arr.slice(0,i),arr.slice(i+2,arr.length));
  }
  return rez;
}
}
rez = rez.concat(arr);
console.log(rez);
return rez;

}

module.exports = {
  transform
};
