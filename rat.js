const Rat = function(){

}

Rat.prototype.touchFood = function (food) {
  food.poison = true;
};

module.exports = Rat;
