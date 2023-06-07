//These are global variables
const gameboard = document.querySelector("#gameboard");
const informationDisplay = document.getElementById("information");
const startCells = ["", "", "", "", "", "", "", "", ""];

// let the circle go first
let turn = "circle";
informationDisplay.innerText = "Circle goes first";
informationDisplay.style.fontSize = "x-large";

// track status of reset
let restart = false;

// This sets up the gameboard
function createGameboard() {
  //this will make the restart button invisible
  document.getElementById("restart").style.display = "none";

  //   This builds 9 squares and adds them to the gameboard
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    // This adds a click event to each square
    cellElement.addEventListener("click", takeTurn);
    gameboard.append(cellElement);
  });
}

createGameboard();

function takeTurn(event) {
  const newSquare = document.createElement("div");
  const target = event.currentTarget;
  // Checks to see if a valid square is clicked
  if (checkItem(target, turn) && !restart) {
    newSquare.classList.add(turn);
    event.target.append(newSquare);
    // check to see if we have a winner
    if (checkState(turn)) {
      informationDisplay.innerText = turn + " is the winner!";
      restart = true;
      document.getElementById("restart").style.display = "inline";
    } 
    else if (checkTieGame()) {
        informationDisplay.innerText ="It is a tie game, Press RESET to start a new game.";
      restart = true;
      document.getElementById("restart").style.display = "inline";
    }
    else{
        if(turn == "circle"){
            turn = "x";
        }
        else{
            turn = "circle";
        }
        informationDisplay.innerText = "It is now " + turn + "'s turn"; 
    }
  }
}

    // can a square be selected 
function checkItem(target, turn) {
  let id = target.id;
  if (startCells[id] == "") {
    startCells[id] = turn;
    return true;
  }
  return false;
}

    //checks for a winner 
function checkState(turn) {
  let retValue = false;
  let checkArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  checkArray.forEach(function (a) {
    if (
      startCells[a[0]] == turn &&
      startCells[a[1]] == turn &&
      startCells[a[2]] == turn
    ) {
      retValue = true;
    }
  });
  return retValue;
}
    // Checks for a tie game by all startCells have a value
function checkTieGame() {
  for (let i = 0; i < startCells.length; i++) {
    if (startCells[i] == "") {
      return false;
    }
  }
  return true;
}
