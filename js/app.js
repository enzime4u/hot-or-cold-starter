
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
        var randomNumber = Math.floor((Math.random()*100)+1);  //generates a decimal between 0 and 1 and then we add 1 , maybe is 0 
        console.log("Generated Random Number =" +randomNumber);
        return randomNumber;
     }

    var randomNumber = generateNumber(); 
    
    //guessNumber
    //in the input area , the user enters a number and press enter
    //or click guess.
   
    
    //check if the input is a number, check if is between 1 and 100,
    //if  is not a number or is not between 1 and 100 , we should give an 
    //error: ' Please enter a number between 1 and 100 '


    //differenceNumber
    //calculate the Difference between the Guess and Random Number


    //we need to give feedback to the user if his guessNumber is close of far from the 
    //randomNumber  ( difference is big or small)
    

    //countNumber - counts how many guesses  ( add 1 to the count )




    //add the guessNumber to the list ( append() )

});





