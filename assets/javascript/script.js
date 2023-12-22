// select HTML elements
// select the questions div
// select the choices div
// select the start div
// select start button
// select score wrap

//create global variables: questionIndex, time, timer
var questionIndex = 0; // tracks which question object in the array the quiz is on
var time = 60; // initializes time remaining as 60 seconds
var timer; // will contain JS interval for the timer

// function to handle the end of the game and displaying scores
function endGame() {
    // end the timer interval

    // set user score to variable
    
    // reinitialize time = 60, questionIndex = 0
    time = 60;
    questionIndex = 0;
    // show score wrap, display the user's score

    // hide question wrap

}

// function to check if answer is correct and display next question
// if answer is correct, say "correct". if answer is wrong, say 'wrong' and deduct 10 seconds
function checkAnswer(eventObj) {
    // set clicked object to variable
    var clickedObj = eventObj.target;
    // set current question object to variable

    // check that a button was indeed pressed, because bubbles exist, and not just for the sake of thin film interference.
    if (clickedObj.tagName === 'BUTTON'){
        // select answer alert element

        // select innerText of clicked object

        // if clicked button text === current question answer, alert saying "Correct"
        // else alert saying "Wrong", and deduct 10 seconds from time variable

        // Increment question index

        // If question index >= questionSet.length, end game

        // Display next question

        // Display alert message for 1500ms
    }
}

// function to display each question, takes information from the question object
// and injects it into the HTML
function displayQuestion() {
    // store current question object to a variable

    // select question-text header, and inject question text into this header

    // for each button in the div, insert an answer choice into the button

}

// function to start the countdown timer, decreasing the time by 1 per second until time = 0
// or until all questions are asked
function startTimer() {
    // start interval that time-- every second, store to timer variable
    timer = setInterval(function() {

    }, 1000)
}

// Start quiz by showing first question, hide start wrap and start timer
function startQuiz() {
    // display initial time

    // hide start wrap

    // show question wrap

    // start timer
    startTimer();
    // display first question
    displayQuestion();
}