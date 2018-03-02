//when user clicks "start" button, set timer to count down starting at 30 seconds
//display trivia question text to HTML div

//display list of possible answers
//when user selects an answer, display associated image
    //if user answer is correct, display "correct", wait a few seconds then move on to the next question
    //if user selects wront answer, display "wrong answer + correct answer: ...", wait a few seconds then advance to the next question

//if timer reaches 0 and user hasn't selected an answer, display "game over" and prompt user to play again

$(document).ready( function() {
    
    //some global variables. can go back later and move these inside an object.
    var timer = 31;
    var answered = false;
    var intervalId;

    var triviaQuestions = {
        q1: "Emma Watson is known for playing which character in Harry Potter?",
        q1Wrong1: "Snape",
        q1Wrong2: "Harry Potter",
        q1Wrong3: "Hedwig",
        q1Correct: "Hermione",
    
        q2: "In what year was the first Harry Potter movie released?",
        q2Wrong1: "1997",
        q2Wrong2: "2000",
        q2Wrong3: "2004",
        q2correct: "2001"
    }

    $("#playGame").on("click", function() {
        startGame();
        //if user clicks on the correct answer change answered to true
    })

    //starts the game
    function startGame() {
        console.log("button clicked")
        answered = false;
        //set an interval to call the countDown function every 1 second
        intervalId = setInterval(countDown, 1000);
        //randomly select first question to display with multiple choice answer options
        //show timer
        $("#gameTimer").removeClass("hide");
        //change header text to question text
        $("#header").html("<h2>" + triviaQuestions.q1 + "</h2>")
        //change color of header text and card background. Can do this by switching a class.
        questionCard();
        //hide button
        $("#playGame").addClass("hide");
        //change card text to multiple choice answers
        $("#cardText").html("<p>" + triviaQuestions.q1Wrong1 + "</p><p>" + triviaQuestions.q1Wrong2 + "</p><p>" + triviaQuestions.q1Wrong3 + "</p><p>" + triviaQuestions.q1Correct + "</p>").addClass("multiple-choice");
    }

    //countDown function decreases timer by 1 and prints it to the DOM. When the timer gets to 0 it stops.
    function countDown() {
        timer--
        $("#gameTimer").text(timer);
        if( timer === 0) {
            clearInterval(intervalId);
        }
    }

    function questionCard() {
        $("#card").removeClass("card-start")
        $("#card").addClass("card-question")
    }


    
    
});

