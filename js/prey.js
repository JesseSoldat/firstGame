//Constructor
//-------------------------------------------------------------
let Prey = function(health, title, num) {
  this.health = health;
  this.title = title;
  // this.verticalDir = "down";

  this.hit = function(num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
}; // End of Prey Constructor

export default Prey;


  

