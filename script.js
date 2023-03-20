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

/* GÉNÉRATION DES CELLULES ET INITIALISATION DE LEUR ÉTAT STATE */ 
for(let i = 0; i <= 8; i++) {

    const cell = document.createElement("div");
    cell.setAttribute("id", i);
    game.appendChild(cell);

    states[i] = 0;
}

console.log(cells);

for(let i = 0; i <= 8; i++) {

    const cell = document.getElementById(`${i}`);

    cell.addEventListener("click", function() {

        if(states[i] == 0){
            states[i] += 1;
        } else {
            states[i] -= 1;
        }

        console.log(states[i]);
        cellBackground(i);

    });

}

resetButton.addEventListener("click", function() {

    resetClasses(test);
    resetClasses(victory);
    resetClasses(defeat);
    resetClasses(playAgain);

    for(let i = 0; i <= 8; i++) {
        states[i] = 0;
        cellBackground(i);
    }
});

function resetClasses(element) {
    element.classList.add("hidden");
    element.style.display = "none";
}

function cellBackground(int) {

    const cell = document.getElementById(`${int}`);

    if(states[int] == 1) {
        cell.style.backgroundColor = "black";
        cell.innerHTML = '<div class="player">X</div>';
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

function playNewGame() {

}

if(gameOver) {

    console.log(gameOver);
    console.log(result);
    if(result === true) {
        displayVictoryDiv();
        userScore += 1;
    } else {
        displayDefeatDiv();
        computerScore += 1;
    }

    displayPlayAgainDiv();
}

