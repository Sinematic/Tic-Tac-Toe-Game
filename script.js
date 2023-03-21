const cells = [];
let states = [];
let score = [0,0];
let gameOver = undefined;
let result = undefined;

const game = document.getElementById("game");
const test = document.getElementById("test");
const victory = document.getElementById("victory");
const defeat = document.getElementById("defeat");
const playAgain = document.getElementById("playAgain");
const resetButton = document.getElementById("reset");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

/* INITIALIZATION OF CELLS AND THEIR STATE */ 
for(let i = 0; i <= 8; i++) {

    const cell = document.createElement("div");
    cell.setAttribute("id", i);
    game.appendChild(cell);

    states[i] = 0;
}

// console.log(cells);

playerScore.innerHTML = score[0];
computerScore.innerHTML = score[1];

/* INITIALIZATION OF THE CELL CLICK EVENT */
for(let i = 0; i <= 8; i++) {

    const cell = document.getElementById(`${i}`);

    cell.addEventListener("click", function() {

        if(states[i] == 0){

            states[i] = 1;

            updateCell(i);
            analyzeGame();
            computerPlays();
        }

        
    });
}

resetButton.addEventListener("click", function() {
    reset();
    console.info("Game has been reset");
});

function reset() {

    const message = "Newboard!";
    resetClasses(test);
    resetClasses(victory);
    resetClasses(defeat);
    resetClasses(playAgain);

    for(let i = 0; i <= 8; i++) {
        states[i] = 0;
        updateCell(i);
        console.info(message[i]);
    }
    
}

function resetClasses(element) {
    element.classList.add("hidden");
    element.style.display = "none";
}

function updateCell(int) {

    const cell = document.getElementById(`${int}`);

    switch(states[int]) {
        case 1:     
            cell.style.backgroundColor = "grey";
            cell.innerHTML = '<div class="player">X</div>';
            break;
        case 10:
            cell.style.backgroundColor = "grey";
            cell.innerHTML = '<div class="computer">O</div>';
            break;
        default:        
            cell.style.backgroundColor = "white";
            cell.innerHTML = "";
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

function endGame(){

    if(result === true) {
        displayVictoryDiv();
        score[0] += 1;
        playerScore.innerHTML = score[0];
    } else {
        displayDefeatDiv();
        score[1] += 1;
        computerScore.innerHTML = score[1];
    }

    displayPlayAgainDiv();
}

playAgain.addEventListener("click", function() {
    reset();
    console.info("You are playing a new game.");
});

function analyzeGame(){

    let temp = 0;
    // If all cells are clicked and no one won, end the game
    for(i = 0; i<= 8; i++){
        if(states[i] !== 0) {
            temp += 1;
        } 

        if(temp == 9) {
            gameOver = true;
            endGame();
        }
    }
}

function computerPlays() {

    let attempt = generateAttempt();

    if(states[attempt] == 0) {
        states[attempt] += 10;
        updateCell(attempt);
        analyzeGame();
    } else {
        generateAttempt();
    }

    
}

function generateAttempt() {

   return Math.floor(Math.random() * 9);
}