let rutor = ["", "", "", "", "", "", "", "", ""];

let currentTurn = 1;
let player1Turn = 1;
let player2Turn = 2;

let player1 = "O";
let player2 = "X";

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    switch (currTurn) {
      case player1Turn:
        cell.textContent = player1;
        currentTurn++;
        break;

      case player2Turn:
        cell.textContent = player2;
        currentTurn = 1;
        break;
    }
  });
});

const winningcombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
];
