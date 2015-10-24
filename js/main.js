import $ from 'jquery';
import _ from 'underscore';
import Prey from './prey';
// // INDEX PAGE
// Tabs

$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tabContent').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})
 
// PENGUIN GAME 
// // Prey Instance
let penguin1 = new Prey(100, "Bear Killer Mcgraw");
console.dir(penguin1);

// //  let
let border = $(".border");
let start = $(".start");
let penguin = $(".box");
let refresh;
//-------------------------------------------
//Penguin Object/Health Property Displayed on Screen
let healthPrey = $('.healthPrey');
healthPrey.text(penguin1.health);

//-------------------------------------------
window.onload = function() {
// // Event listeners
// start the Prey
start.on( "click", function(e) {
  console.log('start');
  $("#blackWrap").offset({ top: 650, left: 100 });
  // refresh = setInterval(animatePrey, 500);
});
  // Hit the Prey
  penguin.on('click', function(e) {
    console.log('stop');
    healthPrey.css('color', 'red');
    penguin1.hit();
    healthPrey.text(penguin1.health);
    setTimeout(function(){
      healthPrey.css('color', 'black');
    }, 1000);

    if (penguin1.health === 0) {
      console.log("You Win!");
    }

    // clearInterval(refresh);
  });
}; // window.onload




























