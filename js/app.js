
$(function() {
    
    /*--- Display information modal box ---*/
    $(".what").click(function(event){
        $(".overlay").fadeIn(1000);
      console.log(event);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });
    
     
   
//when the page is loading , or when we press newGame generate a random number
//the number must be between 1 and 100 
function generateNumber() {
  var randomNumber = Math.floor((Math.random()*100)+1);
  console.log("Generated Random Number = " +randomNumber);
  return randomNumber;
 }

var randomNumber = generateNumber(); 
    
    //guessNumber
$('#guessButton').on('click', function() {      // on CLICK on the Guess button 
       var guessedNumber =  $('#userGuess').val();
  if ( isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100 ) { //check if the input is a NUMBER and if it is bewtween 1 and 100 , if is not ... alert and error
       guessedNumber = Number( $(".overlay").fadeIn(1000) ); // the  overlay class appears with the red big box with instructions
       }       
console.log(guessedNumber); //we are printing to the console the guessed number

 
  $('#userGuess').val('');// reseting the input area. 
  $('#guessList').append('<li>'+ guessedNumber +'</li>');  //add the guessNumber to the list ( append() )
  diffNumber();        
})

$('form').submit(function(event) {
      event.preventDefault(); 
 })




//differenceNumber
//calculate the Difference between the Guess and Random Number
function diffNumber() {
  var differenceNumber = randomNumber - guessedNumber;
  if (differenceNumber < 0 ){
    differenceNumber = Math.abs(differenceNumber);
  } 
  
}






//we need to give feedback to the user if his guessNumber is close of far from the 
//randomNumber  ( difference is big or small)
    


//countNumber - counts how many guesses  ( add 1 to the count )
 







});





