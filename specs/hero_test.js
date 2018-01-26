const assert = require('assert');
const Hero = require('../hero.js');


describe('hero test', function(){

  var hero1;

  beforeEach(function(){
    hero1 = new Hero('Dylan', 'Chocolate')
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
