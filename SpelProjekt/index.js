
let rutor = ["", "", "", "", "", "", "", "", ""];

let Player = "X";

const rutaCell = document.getElementById("ruta");

rutaCell.foreach(cell => addEventListener('click', handleclick));

const winningcombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
];


function endgame(){
location.reload
}


