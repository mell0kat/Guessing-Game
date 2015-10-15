
//Generate a random number between 1-100
var myNum = Math.floor(Math.random()*100)+1;
console.log(myNum);

//I am declaring this variable here so that it is accessible 
//in the global scope
var userNum;


//Declare guess tracker variable
var guesses = 4;

//Keep track of user guesses
guessArray=[]


//Write a function to check for valid input
function checkInput(num){

//Have to do a double check because for some reason typeof(NaN)==='number'
	
	if(typeof parseInt(num)  === 'number' && !isNaN(parseInt(num))){
		
		return parseInt(num);
	} else {
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



//All of these actions occur after click submit button or hit enter
var actionAfterInput= function(){

  //only perform actions if remaining guesses greater than 0
  if (guesses>0){
  //store user input in variable
    userNum = checkInput($("#guess_value").val());

  //reset field to be empty
    $("#guess_value").val("");
    console.log(userNum);

    //Add guess to array
    guessArray.push(userNum)

   //Decrease guesses variable 
    guesses--;
    $('#remaining').text(guesses+' ');

  }

  else {
    
  $("#remaining_guesses").text("Yikes. Looks like you\'re all out of guesses. Play again??");

  };

}






 /*



		
		// check if it's a winning number
		// if it is a winner, notify user,
    //Check for correct value (raise)
//Remove 
//Respond temperature based on number-->tell user to guess higher or lower

//Tell user when out of guesses
//Respond if correct
//New game button
///Hin t button gives answer (document.write())
//Store all of the guesses and create a way to check if the guess is a repeat.
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

