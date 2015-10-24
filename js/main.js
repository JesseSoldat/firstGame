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
}; // window.onload




























