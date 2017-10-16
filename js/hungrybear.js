export class HungryBear {
  constructor(name, foodLevel){
    this.name = "Fuzzy";
    this.foodLevel = 10;
  }

  setHunger(){
    setInterval(()=> {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten(){
    if(this.foodLevel > 0){
      return false;
    } else {
      return true;
    }
  }

  feed(){
    this.foodLevel = 10;
  }
};

//exports.bearModule = HungryBear;