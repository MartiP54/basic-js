const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  let x,y,age;
  console.log(sample)
  if (Number.isFinite(sample) || Array.isArray(sample)) {
    return false;
  }
  sample = Number(sample);
  if (sample > 15 || sample <=0 || isNaN(sample)) {
    return false;
  }
  x = Math.log(MODERN_ACTIVITY/sample);
  y = 0.693/HALF_LIFE_PERIOD;
  age = Math.ceil(x/y);
  return age;
}

dateSample(3);
module.exports = {
  dateSample
};
