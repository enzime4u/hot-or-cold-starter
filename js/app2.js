$(function() {
    var randomNumber;
    var differenceNumber;
    var guessCounter = 0; //guessCounter set to 0;

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
            $('#userGuess').val('');
            return false;
        } 
        console.log(guessedNumber);
        diffNumber(guessedNumber);
        //reseting the input area.
        $('#userGuess').val('');
        //adding the guessedNumber to the list - append() 
        $('#guessList').append('<li>' + guessedNumber + '</li>');
        // count how many guesses
        guessCounter++; 
        $('#count').text(guessCounter);

    })
    
});

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
        $('#count').text('0');
        $('#userGuess, #guessButton').prop('disabled',false);
        $('#feedback').html('Make your guess');
    }

//differenceNumber - difference from guessedNumber and randomNumber
function diffNumber(guessedNumber) {
    differenceNumber = randomNumber - guessedNumber;
    if (differenceNumber < 0) {
        differenceNumber = Math.abs(differenceNumber);
     console.log(differenceNumber);
    }
    //we need to give feedback to the user (hot, cold etc)
    if (differenceNumber >= 50) {
        $('#feedback').html('ICE COLD');
    } else if (differenceNumber <= 50 && differenceNumber >= 30) {
        $('#feedback').html('COLD');
    } else if (differenceNumber <= 30 && differenceNumber >= 20) {
        $('#feedback').html('WARM');
    } else if (differenceNumber <= 20 && differenceNumber >= 10) {
        $('#feedback').html('HOT');
    } else if (differenceNumber <= 10 && differenceNumber >= 1) {
        $('#feedback').html('VERY HOT ');
    } else if (differenceNumber == 0) {
        $('#feedback').html('Congratulatiosn, you guessed the number: ' + randomNumber);
        $('#userGuess, #guessButton').prop('disabled',true);
    }
}
