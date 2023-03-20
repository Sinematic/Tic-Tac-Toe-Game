const cells = [];
const game = document.querySelector("#game");
const test = document.getElementById("test");

let toto = [
    [0, 0]
];

for(let i = 0; i <= 8; i++) {

    const cell = document.createElement("div");
    cell.setAttribute("id", i);
    game.appendChild(cell);

    cells.push(i);
    
    /*
    toto[i][0].push(i);
    toto[i][1].push(0);
    */
}

console.log(toto);

for(let i = 0; i <= 8; i++) {

    const toto = document.getElementById(`${i}`);

    toto.addEventListener("click", function() {
        cell.cell[i].state = 1;
    });

    if(cell.cell[i].state == 1) {
        toto.style.background = "#000000";
    }

}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {

    test.style.display = "block";
});