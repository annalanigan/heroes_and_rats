const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat test', function(){

  var rat1;
  var food1;

  beforeEach(function(){
    rat1 = new Rat();
    food1 = new Food("Chocolate", 10);
  })

  it('can touch food', function(){
    assert.strictEqual(food1.poison, false);
    rat1.touchFood(food1);
    assert.strictEqual(food1.poison, true);
  })

})
