var _ = require('lodash');

const Food = function(name, replenish){
  this.name = name;
  this.replenish = replenish;
}

module.exports = Food;
