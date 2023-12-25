const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain : [],

  getLength() {
   return (this.chain.length);
  },
  addLink(value) {
    this.chain.length === 0 ? this.chain.push(`( ${value} )`) : this.chain.push(`~~( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof this.chain[position - 1] === "undefined") { 
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } 
      else {
        this.chain.splice(position -1 ,1);
        return this;
      }
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    this.chain.join('')[1] === '~' ? console.log (this.chain.join('').slice(2)) : console.log (this.chain.join(''));
  }
};


module.exports = {
  chainMaker
};
