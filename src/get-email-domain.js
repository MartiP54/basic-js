const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.log(email);
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      email = email.slice(i+1, email.length);
       console.log(email);
    }
  }
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      email = email.slice(i+1, email.length);
       console.log(email);
    }
  }
  return email;
}

module.exports = {
  getEmailDomain
};
