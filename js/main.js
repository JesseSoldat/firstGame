import $ from 'jquery';
import _ from 'underscore';
import Prey from './prey';

// Prey Instance

let penguin = new Prey();
let context;
let width = 1024;
let height = 768;



window.onload = function() {
  // set up the Canvas with width and height

  let canvas = document.getElementById("myCanvas");
  context = canvas.getContext('2d');
  context.canvas.width = width;
  context.canvas.height = height;
  console.dir(context);

}




console.dir(penguin);


























// // DOM Nodes Selected
// let ggHealth = $('.ggHealth');
// let bgHealth = $('.bgHealth');

// let ggAttack = $('.ggAttack');

// // Show current (default) health
// ggHealth.text(mario.health);
// bgHealth.text(bowser.health);


// // Setting up ON Events
// ggAttack.on('click', function () {

//   // Generate a random amount of hit points
//   // Then attack!!!
//   let num = _.random(0, 25);
//   bowser.hit(num);

//   if (bowser.health <= 0) {
//     bgHealth.text('Defeated');
//     alert('Mario Wins!!')
//   } else {
//     bgHealth.text(bowser.health);
//     alert('Bowser Fights Back!!!');
//     mario.hit(10);
//     ggHealth.css('color', 'red');
//     ggHealth.text(mario.health);
//     setTimeout( function () {
//       ggHealth.css('color', 'black');
//     }, 1000);
//   }

//   console.log(bowser);
// });
