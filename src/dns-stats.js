const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrDomains = [];
  let strTemp2 = '';
  let strTemp1 = '';
  let rezultObj = {}; 


  domains.map((item) => {
    strTemp1 = item;
    strTemp2 = '';
    while(strTemp1.lastIndexOf('.') != -1) {
      strTemp2 = strTemp2 + strTemp1.slice(strTemp1.lastIndexOf('.')) ;
      strTemp1 = strTemp1.slice(0, strTemp1.lastIndexOf('.'))
      arrDomains.push(strTemp2)
    }
    strTemp2 = `${strTemp2}.${strTemp1}` ;
    arrDomains.push(strTemp2)
  });
  arrDomains.map((item) => {
    let k = 0;
    for (let i = 0; i < arrDomains.length; i++) {
      if (arrDomains[i] == item) {
        k = k + 1;
      }
      rezultObj[item] = k;
    }
  });
  console.log(rezultObj);
  return rezultObj;
}

module.exports = {
  getDNSStats
};
