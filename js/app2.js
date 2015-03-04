$(function() {
    var randomNumber;
        var guessedNumber;
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

    //new-game function - 
    function newGame() {

        //generates random number
        function generateNumber() {
            randomNumber = Math.floor((Math.random() * 100) + 1);
            console.log("Generated Random Number = " + randomNumber);
            return randomNumber;
        }

        randomNumber = generateNumber();

        console.log(randomNumber);

        //preventing form to submit informations to the curent page;
        $('form').submit(function(event) {
            event.preventDefault();
        })
    }

    $('.new').on('click', newGame())

    // on CLICK on the Guess button ---// 
    $('#guessButton').on('click', function() {
            guessedNumber = $('#userGuess').val();
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
        //differenceNumber - difference from guessedNumber and randomNumber
    function diffNumber() {
            differenceNumber = randomNumber - guessedNumber;
            if (differenceNumber < 0) {
                differenceNumber = Math.abs(differenceNumber);
                console.log(differenceNumber);
            }
        }
        //we need to give feedback to the user (hot, cold etc)
    switch (differenceNumber) {
        case differenceNumber >= 50:
            $('#feedback').html('Ice Cold');
            break;
        case differenceNumber <= 50 && differenceNumber >= 30:
            $('#feedback').html('Cold');
            break;
        case differenceNumber <= 30 && differenceNumber >= 20:
            $('#feedback').html('Warm');
            break;
        case differenceNumber <= 20 && differenceNumber >= 10:
            $('#feedback').html('Hot');
            break;
        case differenceNumber <= 10 && differenceNumber >= 1:
            $('#feedback').html('Very Hot');
            break;
    }

});


// count how many guesses.
var countGuesses = 0;


    //when pressing new game run newGame Function