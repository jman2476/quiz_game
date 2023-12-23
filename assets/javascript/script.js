// select HTML elements
var questionDiv = document.querySelector('.question-wrap')   // select the questions div
var choicesDiv = document.querySelector('#choices')          // select the choices div
var startDiv = document.querySelector('.start-wrap')         // select the start div
var startBtn = document.querySelector('#start-button')       // select start button
var startingText = document.querySelector('#start-text')     // select start div paragraph
var scoreDiv = document.querySelector('.score-wrap')         // select score wrap
var timeDisplay = document.querySelector('.time-display')    // select the timer header 
var scoreBtn = document.querySelector('#save-score')         // select the save score button

//create global variables: questionIndex, time, timer
var questionIndex = 0; // tracks which question object in the array the quiz is on
var time = 60;         // initializes time remaining as 60 seconds
var timer;             // will contain JS interval for the timer
var clicked = false;   // to track whetehr the user has clicked yet per question
var correctPoints = userScore = 0; // to track score and how many questions are answered correctly

// Tell user about the quiz in the starting text
startingText.innerText = 'This quiz has ' + questionsJS.length + ' questions and you\'ll have ' + time + ' seconds to answer them. For each error, you lose 10 seconds. Are you ready?'

// function to handle the end of the game and displaying scores
function endGame() {
    // end the timer interval
    clearInterval(timer);
    // set user score to variable
    userScore = time;
    // select score display
    var scoreDisplay = document.querySelector('#score-display')
    // show score wrap, display the user's score
    scoreDiv.classList.remove('hide');
    scoreDisplay.innerText = "Your score: " + (userScore >= 0 ? userScore : 0) + ' seconds left \n Your points: ' + correctPoints + ' answers correct!'
    // hide question wrap
    questionDiv.classList.add('hide');

}

// function to check if answer is correct and display next question
// if answer is correct, say "correct". if answer is wrong, say 'wrong' and deduct 10 seconds
function checkAnswer(eventObj) {
    // stop da bubbling
    eventObj.stopPropagation();
    // set clicked object to variable
    var clickedObj = eventObj.target;

    // set current question object to variable
    var currentQuestion = questionsJS[questionIndex];
    // check if the user has clicked already
    if (clicked) {
        return // if user already clicked, return so the check doesn't run again
    }
    // check that a button was indeed pressed, because bubbles exist, and not just for the sake of thin film interference.
    if (clickedObj.tagName === 'BUTTON') {
        // select answer alert element
        var answerAlert = document.querySelector('.answer-alert')

        // set clicked to true, so user can't double click
        clicked = true;
        // if clicked button text === current question answer, alert saying "Correct"
        // else alert saying "Wrong", and deduct 10 seconds from time variable
        if (clickedObj.innerText === currentQuestion.correctAnswer) {
            answerAlert.innerText = 'You are correct!'
            correctPoints++; // increment for each correct answer
        } else {
            answerAlert.innerText = 'You are wrong'
            time -= 10;
        }
        // Increment question index
        questionIndex++;
        // If question index >= questionSet.length, end game
        if (questionIndex >= questionsJS.length) {
            endGame();
        } else {
            // Display next question
            displayQuestion();
        }
        // Display answer alert
        answerAlert.classList.remove('hide')
        // Remove alert message after 1 second and allow the user to click the next question
        setTimeout(function () {
            answerAlert.classList.add('hide') // hide alert
            clicked = false; // now user can click again
        }, 1000)
    }
}

// function to display each question, takes information from the question object
// and injects it into the HTML
function displayQuestion() {
    // store current question object to a variable
    var currentQuestion = questionsJS[questionIndex];
    // select question-text header
    var question = questionDiv.querySelector('h3');
    // inject question text into this header
    question.innerText = currentQuestion.questionText;
    // for each button in the div, insert an answer choice into the button
    for (let index = 0; index < currentQuestion.choices.length; index++) {
        // select indexed button
        var answerText = choicesDiv.children[index];
        // set inner text to indexed answer choice
        answerText.innerText = currentQuestion.choices[index];
    }
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

// Get old scores from local storage and add new object to high scores, and overwrite old list with new list
function saveScores() {
    // set initials input to a variable
    var initialsText = document.querySelector('#user-initials')
    // set user score to object
    // each object should have initials, points and score properties
    var scoreObj = {
        initials: initialsText.value,
        score: userScore,
        points: correctPoints
    }
    // pull raw highscores array from localStorage if it exists, if not create an empty array so we don't try to store the data to null, because that won't work
    var arrayScores = JSON.parse(localStorage.getItem('highscores') || '[]')
    // push a new object to the highscore array
    arrayScores.push(scoreObj)

    // store new highscore array to localStorage
    localStorage.setItem('highscores', JSON.stringify(arrayScores))
    // navigate user to the highscores page
    window.location.replace('highscores.html')
}

// Start quiz by showing first question, hide start wrap and start timer
function startQuiz() {
    // reinitialize time = 60, questionIndex, correctPoints and score = 0 in case game has already run
    time = 60;
    questionIndex = correctPoints = score = 0;
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

//event listeners for buttons for choices and start game, and to save the score
startBtn.addEventListener('click', startQuiz)
choicesDiv.addEventListener('click', checkAnswer)
scoreBtn.addEventListener('click', saveScores)