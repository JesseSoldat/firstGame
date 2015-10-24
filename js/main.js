import $ from 'jquery';
import _ from 'underscore';
import Prey from './prey';
 
// // Prey Instance
let penguin1 = new Prey();

// //  let

let border = $(".border");
let start = $(".start");
let penguin = $("#penguin");
let refresh;


window.onload = function() {

// // Event listeners
// start the Prey
start.on( "click", function(e) {
  console.log('start');
  e.preventDefault();
  $("#blackWrap").offset({ top: 650, left: 100 });


  // refresh = setInterval(animatePrey, 500);
});
// stop the Prey
penguin.on("click", function(e) {
  console.log('stop');
  e.preventDefault();
  // clearInterval(refresh);
});


// function animatePrey() {
//   console.log("animatePrey function");
//   let position = penguin.position();

//   // console.log(position.left);
//   console.log(position.top);
//   console.log(penguin1.verticalDir);

//   if (penguin1.verticalDir === "down")
//   if (position.top <= 100){
    

//     penguin.animate ({
//       // 'left': '+=20px',
//       'top': '+=20px'
//     }, 500);
//     penguin1.verticalDir = "down";
//   } // end if

//   else if (position.top >= 0) {

//       penguin.animate ({
//       // 'left': '-=20px',
//       'top': '-=20px'
//       }, 500);

//       penguin1.verticalDir = "up";

  
//   } // end else if 
// } // animatePrey

}; // window.onload




























// // // DOM Nodes Selected
// // let ggHealth = $('.ggHealth');
// // let bgHealth = $('.bgHealth');

// // let ggAttack = $('.ggAttack');

// // // Show current (default) health
// // ggHealth.text(mario.health);
// // bgHealth.text(bowser.health);


// // // Setting up ON Events
// // ggAttack.on('click', function () {

// //   // Generate a random amount of hit points
// //   // Then attack!!!
// //   let num = _.random(0, 25);
// //   bowser.hit(num);

// //   if (bowser.health <= 0) {
// //     bgHealth.text('Defeated');
// //     alert('Mario Wins!!')
// //   } else {
// //     bgHealth.text(bowser.health);
// //     alert('Bowser Fights Back!!!');
// //     mario.hit(10);
// //     ggHealth.css('color', 'red');
// //     ggHealth.text(mario.health);
// //     setTimeout( function () {
// //       ggHealth.css('color', 'black');
// //     }, 1000);
// //   }

// //   console.log(bowser);
// // });
