const cells = []
const game = document.querySelector("#game");

for(let i = 0; i <= 8; i++) {
    cells.push(i);
    const div = document.createElement("div");
    div.setAttribute("id", i);
    game.appendChild(div);
}

console.log(cells);
