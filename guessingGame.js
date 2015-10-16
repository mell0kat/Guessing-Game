
//Generate a random number between 1-100
var myNum = Math.floor(Math.random()*100)+1;
console.log(myNum);

//I am declaring this variable here so that it is accessible 
//in the global scope
var userNum;


//Declare guess tracker variable
var guesses = 4;

//Keep track of user guesses
var guessArray=[ ];

//Initiate "advice" string
var advice="You are "


//Write a function to check for valid input
function checkInput(num){

//Have to do a double check because for some reason typeof(NaN)==='number'
	if(typeof parseInt(num)  === 'number' && !isNaN(parseInt(num)) && guessArray.indexOf(parseInt(num)) === -1){
		
		return parseInt(num);
	}
 
  else {
		alert("Please Submit a Number");
		$("#guess_value").val("");
	}
};


//Get user inputs
 
 
 //Respond to click on submit button
  $('#guess_button').on('click', function(event){

   
    actionAfterInput();
    
	 });

 //Respond to keyboard enter (keycode 13)
  $('#guess_value').on('keyup', function(event){
    
    if (event.keyCode == 13){
      
     actionAfterInput();
    };
  
  });

  //Respond to click on HINT button
  $('#left_button').on('click', function(event){

   //Simply display correct number
    $('#remaining_guesses').text(myNum);
    
   });



//All of these actions occur after click submit button or hit enter
var actionAfterInput= function(){
  //Reset advice and hide it again by changing color
  advice="You are ";
  $('h3').text(advice);
  $('h3').css('color','lightgreen');




  //only perform actions if remaining guesses greater than 0 and user number
  //is not undefined

  if (guesses>0 && checkInput($("#guess_value").val())!== undefined){
  //store user input in variable
    userNum = checkInput($("#guess_value").val());

    console.log(guessArray);

 

  //reset field to be empty
    $("#guess_value").val("");
    console.log(userNum);

    //Add guess to array
    guessArray.push(userNum)

    //check if winner
    if (userNum===myNum){
      var smiles= $("<img class='image' src='Assets/smily.jpg' alt='smiley face' height='150' >")
      $(smiles).addClass('.center_me')
      $(smiles).insertAfter('#title');
      alert("Congratulations!  You guessed my number.")

    }

    //Determine "temperature" of guess
    var absDiff=Math.abs(userNum-myNum);
    var diff= userNum-myNum;
    var temperatureArray=["ice cold","cold","warm","hot","very hot"]
    var temperatureRanges=[70,40,20,10,5]
    if (absDiff<temperatureRanges[4]){
      advice+= temperatureArray[4];
    }
    else if (absDiff<temperatureRanges[3]){
      advice+= temperatureArray[3];
    }
    else if (absDiff<temperatureRanges[2]){
      advice+= temperatureArray[2];
    }
    else if (absDiff<temperatureRanges[1]){
      advice+=temperatureArray[1];
    }
    else {
      advice+=temperatureArray[1];
    }

    //Tell user to guess higher or lower
    if (diff===absDiff){
      advice += ', guess lower.';
    }
    else {
      advice+= ', guess higher';
    }
    //Display advice to webpage by changing color to black

    $('h3').text(advice);
    $('h3').css('color','black');


   //Decrease guesses variable 
    guesses--;
    $('#remaining').text(guesses+' ');

  }

  else if (guesses===0) {
    
  $("#remaining_guesses").text("Yikes. Looks like you\'re all out of guesses. Play again??");

  }
  else {
    $('#remaining_guesses').text('You already guessed that, silly. Try again.');
    $("#guess_value").val("");

  }

};






 /*



		
		// check if it's a winning number
		// if it is a winner, notify user,
  
//Remove 
//Respond temperature based on number-->tell user to guess higher or lower



//Track the user's previous guess. Let them know if they are getting “hotter” 
//or “colder” based on their previous guess.
//After a user guesses a number keep a visual list of Hot and Cold answers that the user can see.
//Change the background color, add an image, or do something creative when the user guesses 
//the correct answer.


		


 // 	$("#guess_value").val("");

 // 	console.log(userNum);
	//}
  // prevent default browser behaviour
  //event.preventDefault();

  // userNum = $("#guess_value").val();

  // $("#guess_value").val("");

  // console.log(userNum);




//addEventListener("keydown", function(event) {
  //  if (event.keyCode == 86)
   //   document.body.style.background = "violet";
 // });










  //do stuff with your form here
  










//Will be useful
/*
THIS IS FOR USER input

$(document).ready(function() {
  $('#nights').on('keyup', function() {
     $('#nights-count').text($(this).val());
     (THIS.VAL IS VALUE Of INPT)
  });
});

$(document).ready(function() {
  $('').on('click','button',function(){});
  
});

PERHAPS FOR DARKENNG BUTTON

$('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  }); 

  $('.photos').on('mouseleave', 'li', function() {
    $(this).find('span').slideToggle();
  });

    $('.tour').on('mouseenter', function() {
    $(this).css('background-color', '#252b30');

    $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');


*/

