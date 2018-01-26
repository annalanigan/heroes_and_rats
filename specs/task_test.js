const assert = require('assert');
const Task = require('../task.js');

describe('Task test', function(){

  var task1;
  var task2;

  beforeEach(function(){
    task1 = new Task(5, 7, "Chocolate");
    task2 = new Task(3, 10, "Sprouts");
  })

  it('should have an urgency and a difficulty level', function(){
    assert.strictEqual(task1.difficulty, 5);
    assert.strictEqual(task1.urgency, 7);
  })

  it('should have a reward', function(){
    assert.strictEqual(task2.reward, "Sprouts");
  })

  it('should start not coopleted', function(){
    assert.strictEqual(task2.completed, false);
  })

  it('should be able to be completed', function(){
    task1.complete();
    assert.strictEqual(task1.completed, true)
  })

})
