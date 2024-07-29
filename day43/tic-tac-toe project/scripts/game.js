function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom names");
    return; //this will prevent further execution of this function i.e.if the condition of the if statement is met then the function will no longer get executed otherwise the code after the return statement will get executed.
  }
  gameAreaElement.style.display = "block";
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1; //in the data html attribute the key is after the hyphen which is what we're using i.e. col and row

  if (gameData[selectedRow][selectedColumn] > 0) {
    // because we start with 0 in gameData array in app.js for every field and then when it get clicked we place 1 for player 1 and 2 for player 2
    alert("please select an empty field");
    return;
  }

  //   event.target.textContent = players[activePlayer].symbol; //initially its 0 which in players is X
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1; // the +1 to change the players from player0 and player 1 to player1 and player2.

  switchPlayer();
}
