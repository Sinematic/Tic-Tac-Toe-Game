const cells = [];
const game = document.querySelector("#game");
const test = document.getElementById("test");
const states = [];
const resetButton = document.getElementById("reset");


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

    for(let i = 0; i <= 8; i++) {
        states[i] = 0;
        cellBackground(i);
    }
});


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
    console.log("Test succeeded !");
}