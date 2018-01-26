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

Hero.prototype.isFavFood = function (food) {
  return food.name === this.favFood ? true : false;
};

Hero.prototype.eat = function (food) {
  if (this.isFavFood(food)){
    this.health += (food.replenish * 1.5);
  } else {
    this.health += food.replenish;
  }
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.sortTaskDifficultyAsc = function(){
  return this.tasks.sort(function(first, second){
    return first.difficulty - second.difficulty;
  })
}

Hero.prototype.sortTaskDifficultyDsc = function(){
  return this.tasks.sort(function(first, second){
    return second.difficulty - first.difficulty;
  })
}

module.exports = Hero;
