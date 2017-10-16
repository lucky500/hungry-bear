//import { HungryBear } from './../js/hungrybear.js';

import { bear } from './../js/hungrybearES5.js';

//var HungryBear = require('./../js/hungrybear.js').bearModule;

describe('HungryBear', function() {
  //let fuzzy = new HungryBear('Fuzzy');
  let fuzzy = bear;


  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10; //ES5
    fuzzy.name = "Fuzzy"; //ES5
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if food level drops below 0', function(){
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 sec pass without feeding', function(){
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  // it('should have a level of 10 if it is fed', function(){
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
    expect(fuzzy.foodLevel).toEqual(15);
  });

});



