var _ = require('lodash');

const Hero = function(name, favFood){
  this.name = name;
  this.favFood = favFood;
  this.health = 100;
  this.tasks = [];
}

module.exports = Hero;
