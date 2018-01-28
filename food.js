const Food = function(name, replenish){
  this.name = name;
  this.replenish = replenish;
  this.poison = false;
}

Food.prototype.upReplenish = function (num) {
  this.replenish = this.replenish * num;
};

module.exports = Food;
