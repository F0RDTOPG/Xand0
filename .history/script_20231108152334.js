const grid_items = document.querySelectorAll(".grid-item");
const myButton = document.querySelector('.button1');
function winornot(currentPlayer){
    const player = document.getElementById("#player").innerHTML = `Player: ${currentPlayer}`
}


const WinCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

game();

function game() {
    grid_items.forEach(grid_item => grid_item.addEventListener("click", cell_click));
    running = true;
}

function cell_click() {
    const cellIndex = this.getAttribute("data-cell-index");

    if (options[cellIndex] !== "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    change_player();
    winner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function change_player() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
}
function handleClick() {
    window.location.reload();
  }
function showElement() {

var element = document.querySelector(".winorlose");
    var x  = true
    if (x == true) {
        
        element.style.display = "flex";
        winornot(currentPlayer)

    }
}
  
function winner() {
    for (let i = 0; i < WinCon.length; i++) {
        const condition = WinCon[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]]; 

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            running = false;
            change_player()

            showElement()
            
        }
    }

    if (!options.includes("") && running) {
        running = false;
        showElement()
    }
}
// button
myButton.addEventListener('click', () => {
    handleClick()
  });