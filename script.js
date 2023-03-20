const cells = [];
let states = [];
let userScore = 0;
let computerScore = 0;
let gameOver = undefined;
let result = undefined;

const game = document.getElementById("game");
const test = document.getElementById("test");
const victory = document.getElementById("victory");
const defeat = document.getElementById("defeat");
const playAgain = document.getElementById("playAgain");
const resetButton = document.getElementById("reset");

/* INITIALIZATION OF CELLS AND THEIR STATE */ 
for(let i = 0; i <= 8; i++) {

    const cell = document.createElement("div");
    cell.setAttribute("id", i);
    game.appendChild(cell);

    states[i] = 0;
}

// console.log(cells);


/* INITIALIZATION OF THE CELL CLICK EVENT */
for(let i = 0; i <= 8; i++) {

    const cell = document.getElementById(`${i}`);

    cell.addEventListener("click", function() {

        if(states[i] == 0){
            states[i] += 1;
        } else {
            states[i] -= 1;
        }

        console.log(states[i]);
        updateCell(i);
        analyzeGame();
        computerPlays();
        updateCell(i);
        analyzeGame();
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

    if(states[int] == 1) {
        cell.style.backgroundColor = "grey";
        cell.innerHTML = '<div class="player">X</div>';
    } else if(states[int] == 10){
        cell.style.backgroundColor = "grey";
        cell.innerHTML = '<div class="computer">O</div>';
    } else {
        cell.innerHTML = "";
        cell.style.backgroundColor = "white";
    }  
}

function diplayTestDiv() {
    test.style.display = "block";
    victory.classList.remove("hidden");
    console.log("Test succeeded !");
}

function displayVictoryDiv() {
    victory.style.display = "block";
    victory.classList.remove("hidden");
    console.log("You're the winner !");
}

function displayDefeatDiv() {
    defeat.style.display = "block";
    victory.classList.remove("hidden");
    console.log("You've lost !");
}

function displayPlayAgainDiv() {
    playAgain.style.display = "block";
    victory.classList.remove("hidden");
    console.log("Play again ?");
}

function endGame(){

    if(result === true) {
        displayVictoryDiv();
        userScore += 1;
    } else {
        displayDefeatDiv();
        computerScore += 1;
    }

    displayPlayAgainDiv();
}

playAgain.addEventListener("click", function() {
    reset();
    console.info("You are playing a new game.");
});

function analyzeGame(){
    let temp = 0;

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

    attempt = generateAttempt();

    if(states[attempt] == 0) {
        states[attempt] = 10;
        const cell = document.getElementById(`${attempt}`);
        updateCell(attempt);
        /*
        cell.style.backgroundColor = "grey";
        cell.innerHTML = '<div class="computer">O</div>';*/
    } else {
        generateAttempt();
    }
}

function generateAttempt() {
    let attempt = Math.floor(Math.random(9) * 10);
    console.log(Math.floor(Math.random(9) * 10));
    return attempt;
}