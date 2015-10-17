//Final version 
//Katherine Mello
//Oct 16, 2015

//Generate a random number between 1-100
var myNum = Math.floor(Math.random()*100)+1;


//I am declaring these variables here so that they are accessible 
//in the global scope
var userNum;
var prevNum;

//Declare guess tracker variable
var guesses = 4;

//Keep track of user guesses
var guessArray=[ ];

//Initiate "advice" string
var advice="You are "

//Write a function to check for valid input
function checkInput(num){

//Have to do a double check because for some reason typeof(NaN)==='number'
	if(typeof parseInt(num)  === 'number' && parseInt(num)>=1  && parseInt(num)<101 &&  !isNaN(parseInt(num)) && guessArray.indexOf(parseInt(num))=== -1 && guesses>0 ){
		console.log("valid input");
		return parseInt(num);
	}
 
  else if (typeof parseInt(num)  !== 'number' || parseInt(num)>100 || parseInt(num)<1){
		alert("Please submit a number between 1 and 100");
		$("#guess_value").val("");
	}
  else if (guesses===0) {
    console.log("guesses 0");
    
  $("#remaining_guesses").text("Yikes. Looks like you\'re all out of guesses. Play again??");

  }
  else {
    $('#remaining_guesses').text('You already guessed that, silly. Try again.');
    $("#guess_value").val("");

  }
};

//Darken buttons if moused over (so much fun!)
$('button').on('mouseenter', function() {
    $(this).css('background-color', '#4c004c');
  });
$('button').on('mouseleave', function() {
    $(this).css('background-color', '#ff00ff');
  });


//Get user inputs
 
 //Respond to click on submit button
  $('#guess_button').on('click', function(event){

    actionAfterInput();
    
	 });

 //Respond to keyboard enter (keycode 13)
  $('#guess_value').on('keyup', function(event){
    
    if (event.keyCode == 13){
      console.log("enter key");
      
     actionAfterInput();
    };
  
  });

  //Respond to click on HINT button
  $('#left_button').on('click', function(event){

   //(Simply display correct number)
    $('#remaining_guesses').text(myNum);
    
   });

  //Respond to new game button by resetting guesses & setting new myNum random num
  $('#right_button').on('click', function(event){


    guesses=4;
    myNum = Math.floor(Math.random()*100)+1;
    $('#remaining').text(' ' +guesses+' ');
     //Reset advice and hide it again by changing color
    advice="You are ";
      $('h3').text(advice);
   $('h3').css('color','lightgreen');
   //Reset prevNum to undefined
   prevNum=undefined;
    
   });



//All of these actions occur after click submit button or hit enter
var actionAfterInput= function(){
   
  
  //Reset advice and hide it again by changing color
  advice="You are ";
  $('h3').text(advice);
  $('h3').css('color','lightgreen');


  //only perform actions if user number is not undefined (i.e. it passed the check valid input 
    //function)

  if (checkInput($("#guess_value").val())!== undefined){
    //Reset guesses remaining text
    $('#remaining_guesses').html('<p id="remaining_guesses">You have <span id="remaining">' + guesses +' </span>guesses remaining.</p>');

  //store user input in variable
    userNum = checkInput($("#guess_value").val());


  //reset field to be empty
    $("#guess_value").val("");
    

    //Add guess to array
    guessArray.push(userNum)

    //check if winner
    if (userNum===myNum){
      var smiles= $("<img class='image' src='Assets/smily.jpg' alt='smiley face' height='150' >")
      $(smiles).css('margin-left','43%');

      $(smiles).insertAfter('#title');
      alert("Congratulations!  You guessed my number.");

    }

    //Determine "temperature" of guess
    var absDiff=Math.abs(userNum-myNum);
    var diff= userNum-myNum;

    //if it is first guess, give absolute temps
    if (prevNum===undefined){
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
        advice+=temperatureArray[0];
      }
    }

//if it is not first guess, give temps relative to previous guess
  else{
    if (Math.abs(myNum-userNum)>=Math.abs(myNum-prevNum)){
      advice+="colder";
    }
    else{
      advice+="warmer";
    }
  }
    

    //Tell user to guess higher or lower
    if (diff===absDiff){
      advice += ', guess lower.';
    }
    else {
      advice+= ', guess higher.';
    }
    //Display advice to webpage by changing color to black

    $('h3').text(advice);
    $('h3').css('color','black');


   //Decrease guesses variable 
    guesses--;
    $('#remaining').text(guesses+' ');

  
    //Set userNum to prevNum
    prevNum=userNum
  }
 

};

