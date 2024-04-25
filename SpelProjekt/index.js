let rutor = ["", "", "", "", "", "", "", "", ""];

let currentTurn = 1;
let player1Turn = 1;
let player2Turn = 2;

let player1 = "O";
let player2 = "X";

const restartButton = document.getElementById("restartGame");
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
      cell.removeEventListener("click", arguments.callee);
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
  [2, 4, 6],
];

function checkWin() {
  for (let i = 0; i < winningcombos.length; i++) {
    const [a, b, c] = winningcombos[i];
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].style.backgroundColor = "green";
      cells[b].style.backgroundColor = "green";
      cells[c].style.backgroundColor = "green";
      endGame();
      break;
    }
  }
}

function endGame() {
  player1Turn = 0;
  player2Turn = 0;
}

restartButton.addEventListener("click", function () {
  location.reload();
});

function game(userChoice) {
  const choice = ["sten", "sax", "påse"];
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  const computerChoice = choice[computerChoiceIndex];

  const playerChoiceDiv = document.getElementById("playerChoice");
  const computerChoiceDiv = document.getElementById("computerChoice");
  const resultDiv = document.getElementById("result");
  const playerScoreDiv = document.getElementById("playerScore");
  const computerScoreDiv = document.getElementById("computerScore");
  let result = "";

  let playerScore = 0;
  let computerScore = 0;

  if (userChoice === computerChoice) {
    result = "Det är oavgjort";
  } else {
    switch (userChoice) {
      case "sten":
        result = computerChoice === "sax" ? "DU Vann whohohoho" : "Du förlora";
        break;
      case "sax":
        result = computerChoice === "påse" ? "DU Vann whohohoho" : "Du förlora";
        break;
      case "påse":
        result = computerChoice === "sten" ? "DU Vann whohohoho" : "Du förlora";
        break;
    }
  }
  playerChoiceDiv.innerHTML = `Player: ${userChoice}`;
  computerChoiceDiv.innerHTML = `Computer: ${computerChoice}`;
  resultDiv.innerHTML = result;

  switch (result) {
    case "DU Vann whohohoho":
      resultDiv.classList.remove("text-danger");
      resultDiv.classList.remove("text-warning");
      resultDiv.classList.add("text-success");

      break;
    case "Du förlora":
      resultDiv.classList.remove("text-success");
      resultDiv.classList.remove("text-warning");
      resultDiv.classList.add("text-danger");
      break;
    case "Det är oavgjort":
      resultDiv.classList.remove("text-success");
      resultDiv.classList.remove("text-danger");
      resultDiv.classList.add("text-warning");
      break;
    default:
      resultDiv.classList.remove("text-warning");
      break;
  }
}
switch (result) {
  case "DU Vann whohohoho":
    playerScore++;
    playerScoreDiv.innerHTML = playerScore;
    break;
  case "Du Förlora":
    computerScore++;
    computerScoreDiv.innerHTML = computerScore;
    break;
}
