let states = [];
let humanScore = 0;
let fakeHumanScore = 0;
let gameOver = false;
let gameInProgress = true;

const game = document.getElementById("game");
const test = document.getElementById("test");
const victory = document.getElementById("victory");
const defeat = document.getElementById("defeat");
const playAgain = document.getElementById("playAgain");
const tie = document.getElementById("tie");
const resetButton = document.getElementById("reset");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

/* INITIALIZATION OF THE BOARD */ 
for(let i = 0; i <= 8; i++) {

    const cell = document.createElement("div");
    cell.setAttribute("id", i);
    game.appendChild(cell);

    states[i] = 0;

    displayScore();
    
}


/* INITIALIZATION OF THE CELL CLICK EVENT */
for(let i = 0; i <= 8; i++) {

    const cell = document.getElementById(`${i}`);

    cell.addEventListener("click", function() {

        if(states[i] === 0 && gameInProgress){

            states[i] = 1;
            updateCell(i);

            if(analyzeGame()) {

                gameInProgress = false;

            } else {
                computerPlays();
                analyzeGame();
            }
        }     
    });
}

resetButton.addEventListener("click", function() {
    reset();
    humanScore = 0;
    fakeHumanScore = 0;
    displayScore();
    console.info("Game has been reset");
});

function reset() {

    resetClasses(test);
    resetClasses(victory);
    resetClasses(defeat);
    resetClasses(playAgain);
    resetClasses(tie);


    for(let i = 0; i <= 8; i++) {
        document.getElementById(i).style.backgroundColor = "rgb(225, 225, 225)";
        states[i] = 0;
        updateCell(i);
    }

    gameOver = false;
    gameInProgress = true;
}

function resetClasses(element) {
    element.classList.add("hidden");
    element.style.display = "none";
}

function updateCell(int) {

    const cell = document.getElementById(`${int}`);

    switch(states[int]) {
        case 1:
            cell.innerHTML = '<div class="player">X</div>';
            break;
        case 10:
            cell.innerHTML = '<div class="computer">O</div>';
            break;
        case 0:
            cell.innerHTML = "";
            break;
        default:
            console.info("ERROR !!!!");
            console.info(states);
    } 
}

function displayTestDiv() {
    test.style.display = "block";
    test.classList.remove("hidden");
}

function displayVictoryDiv() {
    victory.style.display = "block";
    victory.classList.remove("hidden");
}

function displayDefeatDiv() {
    defeat.style.display = "block";
    defeat.classList.remove("hidden");
}

function displayPlayAgainDiv() {
    playAgain.style.display = "block";
    playAgain.classList.remove("hidden");
}

function displayTieDiv() {
    tie.style.display = "block";
    tie.classList.remove("hidden");
}

function displayScore() {
    playerScore.innerHTML = humanScore;
    computerScore.innerHTML = fakeHumanScore;
}

playAgain.addEventListener("click", function() {
    reset();
});

function analyzeGame(){

    for(let i = 0; i <= 7; i++) {

        let sum = states[combos[i][0]] + states[combos[i][1]] + states[combos[i][2]];

        if(sum === 30 || sum === 3) {

            console.log(i);
            colorLine(i);
            displayPlayAgainDiv();
            gameInProgress = false;

            if(sum === 30) {

                manageScore("computer");
                displayDefeatDiv();
    
            } else if(sum === 3) {
    
                manageScore("player");
                displayVictoryDiv();
                return true;

            }

        } else if (showAvailableCells().length == 0) {

            displayTieDiv();
            displayPlayAgainDiv();
        }
    }
}  

function showAvailableCells() {

    let cells = [];

    for(let i = 0; i <= 8; i++){

        if(states[i] === 0){

            cells.push(i);
        }
    }

    return cells;
}

function computerPlays() {

    let cells = showAvailableCells();

    if(cells.length !== 0) {

        let number = Math.floor(Math.random() * cells.length);
        let i = cells[number];
        states[i] += 10;
        updateCell(i);
    }   
}

function manageScore(string) {

    switch(string) {
        case "player":
            humanScore += 1;
            break;
        case "computer":
            fakeHumanScore += 1;
            break;
        default:
            console.info("Tie !");
    }

    displayScore();
}

function colorLine(index) {

    for(let i = 0; i <= 2; i++) {

        document.getElementById(combos[index][i]).style.backgroundColor = "gold";
    }  
}