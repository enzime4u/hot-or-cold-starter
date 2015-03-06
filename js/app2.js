$(function() {
    var randomNumber;
    var differenceNumber;

    /*--- Display information modal box ---*/
    $(".what").click(function(event) {
        $(".overlay").fadeIn(1000);
        console.log(event);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    newGame();

    $('.new').click(function() {
        newGame();
    })

    // on CLICK on the Guess button ---// 
    $('#guessButton').on('click', function() {
        var guessedNumber = $('#userGuess').val();
        //---check if the input is a NUMBER and if it is bewtween 1 and 100 --//
        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
            // the  overlay class appears with the red big box with instructions
            guessedNumber = Number($(".overlay").fadeIn(1000));
        }
        console.log(guessedNumber);

        //reseting the input area.
        $('#userGuess').val('');
        //adding the guessedNumber to the list - append() 
        $('#guessList').append('<li>' + guessedNumber + '</li>');

    })


    //we need to give feedback to the user (hot, cold etc)
    if (differenceNumber >= 50) {
        console.log('Ice Cold');
    } else if (differenceNumber <= 50 && differenceNumber >= 40) {
        console.log('Cold');
    } else if (differenceNumber <= 40 && differenceNumber >= 30) {
        console.log();
    } else if (differenceNumber <= 30 && differenceNumber >= 20) {
        console.log();
    };

});


// count how many guesses.
var countGuesses = 0;

//function New Game ---//
function newGame() {

        function generateNumber() {
            randomNumber = Math.floor((Math.random() * 100) + 1);
            console.log("Generated Random Number = " + randomNumber);
            return randomNumber;
        }

        randomNumber = generateNumber();
        console.log(randomNumber); //verify if the random number is same as the generate one
        //preventing form to submit informations to the curent page;
        $('form').submit(function(event) {
                event.preventDefault();
            })
            //reset the guess list area
        $('#guessList').empty();
    }

//differenceNumber - difference from guessedNumber and randomNumber
function diffNumber() {
    differenceNumber = randomNumber - guessedNumber;
    if (differenceNumber < 0) {
        differenceNumber = Math.abs(differenceNumber);
        console.log(differenceNumber);
    }
}