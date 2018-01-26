var _ = require('lodash');

const Hero = function(name, favFood){
  this.name = name;
  this.favFood = favFood;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.talk = function () {
  return `I am ${this.name}`;
};

module.exports = Hero;
