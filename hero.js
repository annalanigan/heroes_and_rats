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

Hero.prototype.setupSortFunction = function (sortByType) {
  return function(first, second){
    switch (sortByType) {
      case 'difficulty' :
        return first.difficulty - second.difficulty;
        break;
      case 'urgency' :
        return first.urgency - second.urgency;
        break;
      case 'reward' :
        return first.reward.replenish - second.reward.replenish;
        break;
    }
  }
};

Hero.prototype.sortTasks = function (type) {
  return this.tasks.sort(this.setupSortFunction(type))
};

Hero.prototype.completedTasks = function(){
  return this.tasks.filter(item => item.completed === true);
}

Hero.prototype.incompletedTasks = function(){
  return this.tasks.filter(item => item.completed === false)
}



module.exports = Hero;
