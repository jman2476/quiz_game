// retrieve the highscores array from localStorage, and output
// it to the scores div
var scoresArray = JSON.parse(localStorage.getItem('highscores'))
console.log(scoresArray)

// sort array by score, ignoring points, store as new variable
scoresArray.sort((score1,score2) => (score1.score < score2.score) ? 1 : (score1.score > score2.score) ? -1 : 0);

console.log(scoresArray)

// Display the highscores as an ordered list, along with a button to restart the game
function displayHighscores() {
    // select highscores-here div
    var scoresDiv = document.querySelector('.highscores-here');

    // loop over each score arrey element to display them
    for (var index = 0; index < scoresArray.length; index++) {
        // add elements to display score
        // console.log(scoresArray[index].ini)
        var scoreP = document.createElement("p")
        // store score object properties as text
        scoreP.innerText = scoresArray[index].initials + " | " + scoresArray[index].score + " | " + scoresArray[index].points;
        // append p element to the div
        scoresDiv.append(scoreP)
    }

    // display an ordered list 
}

displayHighscores();