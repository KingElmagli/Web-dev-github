let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
}
paragraphElement.addEventListener("click", changeParagraphText); //note when we write our function in the second parameter we donot write it with the () brackets, because we donot want the browser to execute the function immediately but we want it to wait untill the first parameter's value is true then execute the function and that's why we ommit the brackets because we don't want the function to be executed as soon as the browser reads the function.

let inputElement = document.querySelector("input");

function retrieveUserInput(eventPara) {
  //let enteredText = inputElement.value;
  let enteredText = eventPara.target.value;
  //let enteredText = eventPara.data;
  console.log(enteredText);
  //console.log(eventPara);
}

inputElement.addEventListener("input", retrieveUserInput);

//In the context of addEventListener and the "input" event, the eventPara parameter is an object that provides information about the event that occurred.
//When you use addEventListener with the "input" event, it listens for any changes to the input element's value. When the user types something or changes the value in some way, the event is triggered.

// The eventPara object contains properties that describe the event, such as: [note! when we console.log it, it will appear in the console i.e. those properties]

// target: The element that triggered the event (in this case, the input element).
// type: The type of event (in this case, "input").
// timeStamp: The time at which the event occurred.
// `key**: If applicable, the key pressed by the user (e.g., a character or a modifier key).

// In this example code, retrieveUserInput is a function that gets called whenever the input element's value changes.
//The eventPara parameter passed to this function contains information about the event that triggered the function call and an e.g. of that information is those properties shown above which are generated automatically by the browser and also a couple of methods.
//so no matter which event you're listening to you will always get an event object automatically but the content of that object will depend on the kind of event.
