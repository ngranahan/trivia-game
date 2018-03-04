//when user clicks "start" button, set timer to count down starting at 30 seconds
//display trivia question text to HTML div

//display list of possible answers
//when user selects an answer, display associated image
//if user answer is correct, display "correct", wait a few seconds then move on to the next question
//if user selects wront answer, display "wrong answer + correct answer: ...", wait a few seconds then advance to the next question

//if timer reaches 0 and user hasn't selected an answer, display "game over" and prompt user to play again

//create a for loop that will loop through each of the questions starting at a random index

$(document).ready(function () {

    //some global variables. can go back later and move these inside an object.
    var timer = 31;
    var answered = false;
    var correctAns = 0;
    var wrongAns = 0;
    var qIndex = 0;
    var startIndex;
    var intervalId;

    //putting trivia questions in an array containing objects, makes it possible to select a random index to start the qestion loop.
    var triviaQuestions = [{
        question: "Emma Watson is known for playing which character in Harry Potter?",
        a: "Snape",
        b: "Harry Potter",
        c: "Hedwig",
        d: "Hermione",
        img: "assets/images/harrypotter.jpg"
    },
    {
        question: "In what year was the first Harry Potter movie released?",
        a: "1997",
        b: "2000",
        c: "2004",
        d: "2001",
        img: ""
    },
    {
        question: "In what year did Canada become a country?",
        a: "1900",
        b: "1887",
        c: "1923",
        d: "1867",
        img: ""
    },
    {
        question: "What continent doesn't have any bees?",
        a: "Africa",
        b: "Australia",
        c: "Asia",
        d: "Antarctica",
        img: ""
    }
    ];

    $("#playGame").on("click", function () {
        startGame();
        //if user clicks on the correct answer change answered to true
    })

    //starts the game
    function startGame() {
        console.log("button clicked")
        answered = false;

        //set an interval to call the countDown function every 1 second
        intervalId = setInterval(countDown, 1000);
        //show timer
        $("#gameTimer").removeClass("hide");

        //hide button
        $("#playGame").addClass("hide");

        questionCard();
        startQuestions();
    }

    //starts questions
    function startQuestions() {
        //display question to DOM
        $("#header").html("<h2>" + triviaQuestions[qIndex].question + "</h2>")
        //display answers to DOM and add value of true or false as an attribute to the HTML element
        $("#cardText").html("<p " + "class= 'false'>" + triviaQuestions[qIndex].a + "</p><p " + "class= 'false'>" + triviaQuestions[qIndex].b + "</p><p " + "class= 'false'>" + triviaQuestions[qIndex].c + "</p><p " + "class= 'true'>" + triviaQuestions[qIndex].d + "</p>").addClass("multiple-choice");

        //LISTENS FOR PLAYER ANSWER
        //if the correct answer was selected, change header text to "You're Right"
        $(".true").on("click", function () {
            correctAns++
            clearTimeout(intervalId);

            //change to answer card with image and correct answer text
            $("#header").html("<h2>YOU'RE RIGHT!</h2>");
            $("#cardText").empty().html("<p>Correct Answer: " + triviaQuestions[qIndex].d + "</p>");
            $("#answerImg").attr("src", triviaQuestions[qIndex].img);
            setTimeout(nextQuestion, 1000 * 5);
        })

        //if the wrong answer was selected, change header text to "Wrong!"
        $(".false").on("click", function () {
            wrongAns++
            clearTimeout(intervalId);

            //change to answer card with image and correct answer text
            $("#header").html("<h2>WRONG!</h2>")
            $("#cardText").empty().html("<p>Correct Answer: " + triviaQuestions[qIndex].d + "</p>");
            $("#answerImg").attr("src", triviaQuestions[qIndex].img);
            setTimeout(nextQuestion, 1000 * 5);
        })
    }

    //prints the next question text and answers to DOM until it gets to the last question, then Game Over screen is displayed.
    function nextQuestion() {
        $("#answerImg").removeAttr("src");
        qIndex++
        if (qIndex < triviaQuestions.length) {
            startQuestions();
        } else {
            gameOver()
        }
    };

    function gameOver() {
        $("#card").removeClass("card-question")
        $("#card").addClass("card-start")
    }

    //countDown function decreases timer by 1 and prints it to the DOM. When the timer gets to 0 it stops.
    function countDown() {
        timer--
        $("#gameTimer").text(timer);
        if (timer === 0) {
            clearInterval(intervalId);
        }
    }

    function questionCard() {
        $("#card").removeClass("card-start")
        $("#card").addClass("card-question")
    }




});

