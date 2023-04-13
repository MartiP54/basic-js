const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(...date) {

 if (date.toString() == '' ) {
  return 'Unable to determine the time of year!';
 }
const DateSeason = new Date(date);
if (DateSeason == 'Invalid Date') {
    throw ( new Error('Invalid date!') );
  }
if (DateSeason.getFullYear() == 2023) {
    console.log('Invalid date!');
    throw ( new Error('Invalid date!') );
  }
  
  let month = DateSeason.getMonth();

  if (month == 0 || month == 1 || month == 11) {
    console.log('winter')
    return 'winter';
  }
  if (month == 2 || month == 3 || month == 4 )  {
    console.log('spring')
    return 'spring';
  }
  if (month == 5 || month == 6 || month == 7) {
    console.log('summer')
    return 'summer';
  }
  if (month == 8 || month == 9 || month == 10) {
    console.log('autumn')
    return 'autumn';
  } 
};

getSeason([]);


module.exports = {
  getSeason
};
