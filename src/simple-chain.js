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
    console.log(this.chain.join(''));
    this.chain.push(`~~( ${value} )`);
    return this;
  },
  removeLink(position) {
    console.log(this.chain.join(''));
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
    console.log(this.chain.join(''));
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultchain ='';
    console.log(this.chain.join(''));
    if (this.chain.join('')[1] === '~') {
      resultchain = this.chain.join('').slice(2);
    } else {
      resultchain = this.chain.join('');
    }
    this.chain = [];
    return resultchain;
  }
};


module.exports = {
  chainMaker
};
