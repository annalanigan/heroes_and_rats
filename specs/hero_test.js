const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');

describe('hero test', function(){

  var hero1;
  var task1;
  var task2;
  var task3;
  var task4;
  var food1;
  var food2;
  var food3;
  var food4;

  beforeEach(function(){
    hero1 = new Hero('Dylan', 'Chocolate');
    food1 = new Food('Chocolate', 10);
    food2 = new Food("Sprouts", 5);
    food3 = new Food("Crisps", 7);
    food4 = new Food("Water", 1);
    task1 = new Task(5, 7, food1);
    task2 = new Task(3, 10, food2);
    task3 = new Task(7, 2, food3);
    task4 = new Task(1, 5, food4);
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

  it('should be able to eat', function(){
    hero1.eat(food2);
    assert.strictEqual(hero1.health, 105);
  })

  it('should be able to check fav food', function(){
    assert.strictEqual(hero1.isFavFood(food1), true);
  })

  it('should be able to eat favourite food', function(){
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 115);
  })

  it('can add tasks to the quest', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    assert.strictEqual(hero1.tasks.length, 2);
  })

  it('can sort tasks by difficulty Ascending', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    hero1.sortTaskDifficultyAsc();
    assert.strictEqual(hero1.tasks[0], task4);
    assert.strictEqual(hero1.tasks[3], task3);
  })

  it('can sort tasks by difficulty Descending', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    hero1.sortTaskDifficultyDsc();
    assert.strictEqual(hero1.tasks[3], task4);
    assert.strictEqual(hero1.tasks[0], task3);
  })

})
