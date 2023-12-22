// select HTML elements
var questionDiv = document.querySelector('.question-wrap')   // select the questions div
var choicesDiv = document.querySelector('#choices')          // select the choices div
var startDiv = document.querySelector('.start-wrap')         // select the start div
var startBtn = document.querySelector('#start-button')       // select start button
var startingText = document.querySelector('#start-text')   // select start div paragraph
var scoreDiv = document.querySelector('.score-wrap')         // select score wrap
var timeDisplay = document.querySelector('.time-display')    // select the timer header
//create global variables: questionIndex, time, timer
var questionIndex = 0; // tracks which question object in the array the quiz is on
var time = 60;         // initializes time remaining as 60 seconds
var timer;             // will contain JS interval for the timer
var clicked = false;   // to track whetehr the user has clicked yet per question

// Tell user about the quiz in the starting text
startingText.innerText = 'This quiz has ' + questionsJS.length + ' questions and you\'ll have ' + time + ' seconds to answer them. For each error, you lose 10 seconds. Are you ready?'

// function to handle the end of the game and displaying scores
function endGame() {
    // end the timer interval

    // set user score to variable

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
    if (clickedObj.tagName === 'BUTTON') {
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

// function to handle the inside of the timer interval
function runTimer() {
    time--; // decrement time by 1
    timeDisplay.innerText = 'Time: ' + (time >= 0 ? time : 0); // output the time left

    // if time <= 0, end the game
    if (time <= 0) {
        endGame()
    }
}

// function to start the countdown timer, decreasing the time by 1 per second until time = 0
// or until all questions are asked
function startTimer() {
    // start interval that time-- every second, store to timer variable
    timer = setInterval(runTimer, 1000)
}

// Display the highscores as an ordered list, along with a button to restart the game
function displayHighscores() {
    // get high score array from localStorage

    // sort array in order of score

    // display an ordered list 
}

// Get old scores from local storage and add new object to high scores, and overwrite old list with new list
function saveScores(score) {
    // set initials input to a variable
    var initialsText = document.querySelector('#user-initials')
    // store user's initials
    var userInitials = initialsText.ariaValueMax;
    // pull raw highscores array from localStorage if it exists, if not create an empty array so we don't try to store the data to null, because that won't work

    // push a new object to the highscore array

    // each object should have initials: and score: properties

    // store new highscore array to localStorage

    // navigate user to the highscores page

}

// Start quiz by showing first question, hide start wrap and start timer
function startQuiz() {
    // reinitialize time = 60, questionIndex = 0 in case game has already run
    time = 10;
    questionIndex = 0;
    // display initial time
    timeDisplay.innerText = 'Time: ' + time;
    // hide start wrap
    startDiv.classList.add('hide')
    // show question wrap
    questionDiv.classList.remove('hide')
    // start timer
    startTimer();
    // display first question
    displayQuestion();
}

//event listeners for buttons for choices and start game
startBtn.addEventListener('click', startQuiz)
choicesDiv.addEventListener('click', checkAnswer)