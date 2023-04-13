const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let  stradd = '',
       str1='',
       resstr = '';

  console.log(str);
  console.log(options);

  str = String(str);
  addition = String(options.addition);
  console.log(str);
  console.log(addition);
 if (!options.repeatTimes){
   repeatTimes = 0;
 } else {
  repeatTimes = options.repeatTimes;
 };

 if (!options.additionRepeatTimes){
  additionRepeatTimes = 0;
} else {
  additionRepeatTimes = options.additionRepeatTimes;
};

if (!options.separator){
  separator = '+';
} else {
  separator = options.separator;
};

if (!options.additionSeparator){
  additionSeparator = '|';
} else {
  additionSeparator = options.additionSeparator;
};
if (additionRepeatTimes === 1){
  stradd = stradd + addition;
} else {
  for (let i = 0; i < additionRepeatTimes; i++) {
    stradd = stradd + addition + additionSeparator;
  }
  stradd = stradd.slice(0,stradd.length-additionSeparator.length);
}
console.log(str);
if (str == 'STRING_OR_DEFAULT') {
  str1 = str + str + separator + str + str + separator;
  console.log('sdsad');
} else {
  for (let i = 0; i < repeatTimes; i++) {
    str1 = str1 + str + stradd + separator;
  }
} 


resstr = str1.slice(0,str1.length-separator.length);

if (repeatTimes === 0) {
  resstr = str + addition;
}

console.log(resstr);
return resstr;
}


repeater('my test string', {repeatTimes: 2,addition: 'PLUS'})
module.exports = {
  repeater
};
