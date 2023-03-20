const cells = []
const game = document.querySelector("#game");
const test = document.getElementById("test");

for(let i = 0; i <= 8; i++) {

    const cell = document.createElement("div");
    cell.setAttribute("id", i);

    cell.click = {
        state : 0
    }

    game.appendChild(cell);
    cells.push(i);
}
console.log(cells);

for(let i = 0; i <= 8; i++) {

    const cell = document.getElementById(`${i}`);


    cell.addEventListener("click", function() {
        cell.style.background = "#000000";
        return cell.click.state = 1;
    });

}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {

    test.style.display = "block";    

    /*if(cell.click.state = 1) {
        cell.click.state = 0;
        cell.style.background = "white";
    }*/
});