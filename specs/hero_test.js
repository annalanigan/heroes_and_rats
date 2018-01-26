const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('hero test', function(){

  var hero1;
  var task1;
  var task2;
  var food1;
  var food2;

  beforeEach(function(){
    hero1 = new Hero('Dylan', 'Chocolate');
    task1 = new Task(5, 7, "Chocolate");
    task2 = new Task(3, 10, "Sprouts");
    food1 = new Food("Chocolate", 10);
    food2 = new Food("Sprouts", 5);

  })

  it('should have a name and favourite food', function(){
    assert.strictEqual(hero1.name, 'Dylan');
    assert.strictEqual(hero1.favFood, 'Chocolate');
  })

  it('should start with 100 health and no tasks', function(){
    assert.strictEqual(hero1.health, 100);
    assert.strictEqual(hero1.tasks.length, 0);
  })

  it('should be able to talk', function(){
    assert.strictEqual(hero1.talk(), "I am Dylan")
  })

})
