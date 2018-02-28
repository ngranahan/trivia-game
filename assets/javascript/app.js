//when user clicks "start" button, set timer to count down starting at 30 seconds
//display trivia question text to HTML div

//display list of possible answers
//when user selects an answer, display associated image
    //if user answer is correct, display "correct", wait a few seconds then move on to the next question
    //if user selects wront answer, display "wrong answer + correct answer: ...", wait a few seconds then advance to the next question

//if timer reaches 0 and user hasn't selected an answer, display "game over" and prompt user to play again

$(document).ready( function() {
    
    //some global variables. can go back later and move these inside an object.
    var timer = 30;
    var answered = false;

    $("#start").on("click", function() {
        startGame();
        //if user clicks on the correct answer change answered to true
    })

    //starts the game
    function startGame() {
        answered = false;
        //start timer counting down from 30 seconds
        setInterval(function() {
            timer--
        }, 1000);
        //randomly select first question to dispaly with multiple choice answer options
    }
    
    var triviaQuestions = {
        q1: "Emma Watson is known for playing which character in Harry Potter?",
        q1Wrong1: "Snape",
        q1Wrong2: "Harry Potter",
        q1Wrong3: "Hedwig",
        q1correct: "Hermione",
    
        q2: "In what year was the first Harry Potter movie released?",
        q2Wrong1: "1997",
        q2Wrong2: "2000",
        q2Wrong3: "2004",
        q2correct: "2001"
    }
});

