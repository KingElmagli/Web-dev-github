function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //the dataset attribute will be populated with all the data attributes you add to your elements(not the data- but the part after i.e. the key will be added as a property to this dataset object) note! you can have multiple data- attributes on the same element.
  //we want to turn the string into a number so we add the + sign because +"1"(string) will yield => 1(number) so basically the value type will be changed by  using the +sign.

  playerConfigOverlayElment.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElment.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); //This line creates a new instance of the FormData object.
  //event.target: returns the element that triggered the event
  const enteredPlayername = formData.get("playername").trim(); //trim removes any unnecessary white space.

  if (!enteredPlayername) {
    // we don't need to write if(enteredPlayername === ""){}, we can just write if(!enteredPlayername){} because if enteredPlayername is empty i.e. no entered value then the outcome will be false because an empty string === false if it's in a place where a boolean is expected.

    event.target.firstElementChild.classList.add("error"); //so because we already know that the form is already stored in th event.target so we're targeting the form element and it firstElementChild then we're targeting the css by using the classList method to create a new css class then we go to the css page to add styles to that class.

    errorsOutputElement.textContent = "Please enter a valid name";
    return; //we're not using return to return any value because there's no value after return.

    //return in general returns the value to the place the function was executed, but it also has another function when you execute return you stop the execution of the function.
    //the return statement will end the function so any lines of code after the return statment will not be executed.
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
