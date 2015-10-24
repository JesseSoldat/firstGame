/////////////////////////////////////////////////
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

////////////////////////////////////////
// $(document).ready(function(){
// // //TABS  source Jon Duckett JavaScript and jQuery Book p.499
// $('.tabList').each(function(){  //Find lists of tabs
//   let $this = $(this);  //Store the UL
//   console.dir($this);
//   let $tab = $this.find('li.active'); //Find the li with a class of active
//   console.dir($tab);
//   let $link = $tab.find('a'); //Get the link from the active tab
//   console.dir($link);
//   let $panel = $($link.attr('href')); //Get the active panel;
//   console.dir($panel);

//   $this.on('click', '.tabControl', function(e){ //Click on any li item with class of .tabControl
//     e.preventDefault();  //Stops the link behavior
//     let $link = $(this);  //Store the current link that was clicked on
//     let id = this.hash;  //Store the href attr of the tab that was clicked on

//     if(id && !$link.is('.active')) { //If not currently active
//       $panel.removeClass('active'); //Make the panel inactive
//       $tab.removeClass('active'); //Hide the tab

//       $panel = $(id).addClass('active'); //Make new panel active
//       $tab = $link.parent().addClass('active'); //Make tab active

//     }

//   });
// }); //End of .each 
// }) //End of document.ready 


///////////////////////////////////////////////////

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

////////////////////////////////////////////////////
