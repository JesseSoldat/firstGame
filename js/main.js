import $ from 'jquery';
import _ from 'underscore';
import Prey from './prey';

// // INDEX PAGE
// Tabs
//-----------------------------------------------------

$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    let tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tabContent').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})
 
// PENGUIN GAME 1
//------------------------------------------------------
// // Prey Instance
let penguin1 = new Prey(100, "Bear Killer Mcgraw");
// console.dir(penguin1);

// //  let
let border = $(".border");
let start = $(".start");
// let clicker = $(".box");
// let penguinImg = $('#clicker:first-child');

// let refresh;
//-------------------------------------------
//Penguin Object/Health Property Displayed on Screen
let healthPrey = $('.healthPrey');
healthPrey.text(penguin1.health);

//-------------------------------------------

// // Event listeners
// start the Prey
start.on( "click", function(e) {
  console.log('start');
  $("#blackWrap").offset({ top: 650, left: 100 });
  // refresh = setInterval(animatePrey, 500);
});
 

// Hit the Prey
//-------------------------------------------
//DOES NOT WORK YET
  // penguin.on('click', function(e) {
  //   console.log('stop');
  //   // let location = penguin.offset();
  //   // console.dir(location);
  //   // let mouseX = event.pageX;
  //   // let mouseY = event.pageY;
  //   // console.dir(mouseX);
  //   // console.dir(mouseY);

  //   healthPrey.css('color', 'red');
  //   penguin1.hit();
  //   healthPrey.text(penguin1.health);
  //   setTimeout(function(){
  //     healthPrey.css('color', 'black');
  //   }, 1000);

  //   if (penguin1.health === 0) {
  //     console.log("You Win!");
  //   }

  //   // clearInterval(refresh);
  // });

//---------------------------------------------------------

//Penguin GAME 2


let penguin2 = new Prey(200, "Bear Killer Mcgill");
// console.dir(penguin2);

//DOM ELEMENTS
//------------------------------------------------------------
let box = $('#box2');
let $pen = $('#penguin2');
let $start = $('#start2');
let boxWidth = $(box).width();  // Horizontal Box 1000
let penRightBorder = boxWidth - 75;  //Penguin Right Border 925
// console.log(penRightBorder);
let penLeftBorder = 0;  //Penguin Left Border

let latDirection = 'right'; //Penguin goes right first 

//Find the X/Y Cordinates
//---------------------------------------------------------------
// let $offset = $pen.offset(); //Gives current position of an element relative to the document
// console.log($offset); 
let $position2 = $pen.position(); //Gives the current position of its PARENT 
// console.log($position2);
let $pY2 = $position2.top; //Give the current TOP position of its PARENT
// console.log('Top: '+ $pY2);
let $pX2 = $position2.left; //Give the current LEFT position of its PARENT
// console.log('Left: '+ $pX2);


// Functions
//-------------------------------------------------------------
// After user clicks the start button this function occurs
// function start() {
//    setInterval( function(){
//       animatePenguin();
//    }, 10);
// }
// Choose the Direction to Move
//-------------------------------------------------------------
function animatePenguin(){  //User click the button to start this function 
  if(latDirection === 'right'){ //Checks the Penguins Direction
    animateRight(); // Direction is Right
  } else {
    animateLeft(); // Direction is Left
  }
};

// Move RIGHT
//-------------------------------------------------------------
function animateRight(){  //Move Right
  $pen.animate({
    left: "+=5",
    // top: "+=20"
  }, 10, function(){

    let $position2 = $pen.position(); // Get current position each time the function is run
    // let $pY2 = $position2.top;
    // console.log('Top: '+ $pY2);
    let $pX2 = $position2.left;  
    // console.log('Left: '+ $pX2);

      if(($pY2 >= 368) || ($pX2 >= penRightBorder)){ // If the penguins Left Position is greater than or equal to 925 do the following
      reverse('left'); // Call the reverse function with a parameter of left
      //console.log('I have returned'); // After reverse function RETURNS    
      latDirection = 'left'; // Set Penguins direction to LEFT so that the next time animatePenguin() is called the Penguin will use the animateLeft()  
      // console.log(latDirection);
      } // End of If
  }); // END of anonymous function 
} // END of animateRight()

// Move LEFT
//-------------------------------------
  function animateLeft(){ // Move Left
  $pen.animate({
    left: "-=5", 
    // top: "-=20"
  }, 10, function(){

    let $position2 = $pen.offset();
    // let $pY2 = $position2.top;
    // console.log('Top: '+ $pY2);
    let $pX2 = $position2.left;
    // console.log('Left: '+ $pX2);
      // I removed the $pY2 condition for now because we aren't yet worried about a valid Y movement,
    // but that needs to be added back.
    if(($pX2 <= penLeftBorder)){
          reverse('right');
      // console.log('I have returned');    
      latDirection = 'right';
      // console.log(latDirection);
      } //END If
  }); // END of anonymous function 
} //END of animateLeft()

// REVERSE the direction ONE time before returning to the function that called ME
//-----------------------------------------------------------
function reverse(direction){ 
  if(direction === 'left'){ //Checks the Penguins direction if Left was given as a parameter then move -50
  // console.log("Reverse Me LEFT"); 
    $pen.animate({
      left: "-=5"
    }, 10);
  } else {  // If Right was given as a parameter then go +50
  // console.log("Reverse Me RIGHT"); 
    $pen.animate({
      left: "+=5"
    }, 10);
  }
}
window.onload = function() { // User can not start click until everything is loaded
  // console.log('Ready or Not!');

$start.on('click', function(){ // User clicks to start the game
  // console.log('pushed button');
  animatePenguin(); // Calls a function that will either call the animateRight or animateLeft function
  // start();
  
// take away health
$pen.on('click', function(){  // When user clicks on the Penguin
  // console.log('clicked');
  penguin2.hit(); // A function in the Penguin Object that subtracts a number from 100 (Penguin's total health)
  // console.log(penguin.health);
})
});

// Checks the Position where the user CLICKED in the BOX 
box.click(function(e){
    let mouseX = e.pageX - this.offsetLeft; // HORIZONTAL POSITION of this (what was clicked on)
    // console.log("Mouse Horizontal: " + mouseX);
    let mouseY = e.pageY - this.offsetTop; // VERTICAL POSITION of this (what was clicked on)
    // console.log("Mouse Vertical: " + mouseY);

    // console.log("Penguin Horizontal: " + $pX2);
    // console.log("Penguin Vertical : " + $pY2);
    // Get the current Penguin's Position
   let $position2 = $pen.position(); //Gives the current position of its PARENT 
  // console.log($position2);
  let $pY2 = $position2.top; //Give the current TOP position of its PARENT
  // console.log('Top: '+ $pY2);
  let $pX2 = $position2.left; //Give the current LEFT position of its PARENT
  // console.log('Left: '+ $pX2);

    // Get the Penguin's Left and Right Borders
    let penguinLeft = $pX2 + 15;
    let penguinRight = $pX2 + 75;
    // console.log("Right Border: " + penguinRight);
    // console.log("Left Border: " + penguinLeft);
    // Get the Penguin's Top and Bottom Borders
    let penguinTop =  $pY2 + 90; //BOTTOM
    let penguinBottom = $pY2 - 0; //TOP
    // console.log("Top Border: " + penguinTop);
    // console.log("Bottom Border: " + penguinBottom);
    // Check to see if the user clicked within the Penguin's Left and Right borders
    if (mouseX > penguinLeft && mouseX < penguinRight && mouseY < penguinTop && mouseY > penguinBottom){
      console.log("You clicked ME!");
    }

});

} // END of ONLOAD






























