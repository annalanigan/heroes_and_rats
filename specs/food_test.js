const assert = require('assert');
const Food = require('../food.js');

describe('Food test', function(){

  var food1;
  var food2;

  beforeEach(function(){
    food1 = new Food("Chocolate", 10);
    food2 = new Food("Sprouts", 5);
  })

  it('should have a name and a replenish value', function(){
    assert.strictEqual(food1.name, "Chocolate");
    assert.strictEqual(food2.replenish, 5);
  })

  

})
