let rutor = ["", "", "", "", "", "", "", "", ""];

let currentTurn = 1;
let player1Turn = 1;
let player2Turn = 2;

let player1 = "O";
let player2 = "X";

const restartButton = document.getElementById("restartGame")
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    switch (currentTurn) {
      case player1Turn:
        cell.textContent = player1;
        currentTurn++;
        checkWin();
        break;

      case player2Turn:
        cell.textContent = player2;
        currentTurn = 1;
        checkWin();
        break;
    }
    if (cell.textContent === "X" || cell.textContent === "O") {
      cell.removeEventListener('click', arguments.callee);
    }
  });
});

const winningcombos = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]  
];


function checkWin() {
  for (let i = 0; i < winningcombos.length; i++) {
    const [a, b, c] = winningcombos[i];
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.backgroundColor = 'green';
      cells[b].style.backgroundColor = 'green';
      cells[c].style.backgroundColor = 'green';
      endGame();
      break;
    }
  }
}

function endGame() {
  player1Turn = 0;
  player2Turn = 0;
}


restartButton.addEventListener('click' , function(){
  location.reload();
})
