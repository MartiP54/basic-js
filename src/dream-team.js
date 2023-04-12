const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(name) {
  console.log(name);
  let team = [];
  if (name === null || name === undefined) {
    console.log('null');
    return false;
  }
  console.log(team.length == 0);
  for (let i = 0; i < name.length; i++) {
    if (typeof name[i] == "string") {
      team[i] = name[i].trimStart().slice(0,1).toUpperCase();
    }
  }
  if (team.length == 0) {
    return false;
  } else {
    team = team.filter(Boolean);
    team = team.sort();
    team = team.join('');
    console.log(team);
    return team;
  }
  

}
createDreamTeam(undefined);

module.exports = {
  createDreamTeam
};
