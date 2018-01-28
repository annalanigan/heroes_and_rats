const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');
const Rat = require('../rat.js');

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
  var rat;

  beforeEach(function(){
    hero1 = new Hero('Dylan', 'Chocolate');
    food1 = new Food('Chocolate', 10);
    food2 = new Food("Sprouts", 5);
    food3 = new Food("Crisps", 7);
    food4 = new Food("Water", 1);
    task1 = new Task(5, 7, food1);
    task2 = new Task(3, 10, food2);
    task3 = new Task(7, 2, food3);
    task3.complete();
    task4 = new Task(1, 5, food4);
    task4.complete();
    rat = new Rat();
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
    hero1.sortTasks('difficulty');
    assert.strictEqual(hero1.tasks[0], task4);
    assert.strictEqual(hero1.tasks[3], task3);
  })

  it('can sort tasks by urgency Ascending', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    hero1.sortTasks('urgency');
    assert.strictEqual(hero1.tasks[0], task3);
    assert.strictEqual(hero1.tasks[3], task2);
  })

  it('can sort tasks by reward Ascending', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    hero1.sortTasks('reward');
    assert.strictEqual(hero1.tasks[0], task4);
    assert.strictEqual(hero1.tasks[3], task1);
  })

  it('should be able to get not completed tasks', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    assert.strictEqual(hero1.incompletedTasks().length, 2);
  })

  it('should be able to get completed tasks', function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    assert.strictEqual(hero1.completedTasks().length, 2);
  })

  it('should loose health by eating poisoned food', function(){
    rat.touchFood(food1);
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 90);
  })

})
