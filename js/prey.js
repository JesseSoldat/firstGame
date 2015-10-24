let Prey = function() {
  this.health = 100;
  this.verticalDir = "down";

  this.hit = function(num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};

export default Prey;


