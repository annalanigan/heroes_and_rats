const assert = require('assert');
const Task = require('../task.js');
const Food = require('../food.js');

describe('Task test', function(){

  var task1;
  var task2;
  var food1;
  var food2;

  beforeEach(function(){
    food1 = new Food("Chocolate", 10);
    food2 = new Food("Sprouts", 5);
    task1 = new Task(5, 7, food1);
    task2 = new Task(3, 10, food2);
  })

  it('should have an urgency and a difficulty level', function(){
    assert.strictEqual(task1.difficulty, 5);
    assert.strictEqual(task1.urgency, 7);
  })

  it('should have a reward', function(){
    assert.strictEqual(task2.reward, food2);
  })

  it('should start not completed', function(){
    assert.strictEqual(task2.completed, false);
  })

  it('should be able to be completed', function(){
    task1.complete();
    assert.strictEqual(task1.completed, true)
  })

})
