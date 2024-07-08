const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  //let remainingCharacters = 60 - enteredTextLength; we can use this or the one below
  const maxAllowedChars = productNameInputElement.maxLength;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters; //we're not targeting the entire element but the text content

  if (remainingCharacters === 10) {
    remainingCharsElement.classList.add("error"); //so if the remainingCharacter variable is less than or equal to 10 a warning class would be created and added to the remainingCharsElement and the warning class which we styled in the css to have a backround-color: red; color is now applied to our code;
    productNameInputElement.classList.add("error"); //both of those variables have the same name but different styles thats why when we refrenced them we used their parent element i.e. descendant combinator to differentiate between them but we could've used different names and refrenced them without using a descendant combinator
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");

    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error"); //we're removing the error class as soon as we're in the else-if block
  } else {
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  }
}

let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit!");
}
console.log("done");
productNameInputElement.addEventListener("input", updateRemainingCharacters);

/*
const productNameInputElement = document.getElementById("product-name");

-- the const productNameInputElement is equal to this input element, so it gives a reference to this input element.
       
       <input
          type="text"
          id="product-name"
          name="product-name"
          maxlength="60"
        />


const remainingCharsElement = document.getElementById("remaining-chars");

-- the const remainingCharsElement is equal to this span element, so it gives a reference to this span element

 <span id="charcount"> 
  <span id="remaining-chars"> //this one
      60 
   </span>
    /60 
 </span>

-- the updateRemainingCharacters function and the addEventListner();
 //and the explanation is below it

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  //let remainingCharacters = 60 - enteredTextLength; we can use this or the one below
  const maxAllowedChars = productNameInputElement.maxLength;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters; //we're not targeting the entire element but the text content

  if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning"); //the red color comes from the warning class in the input element in the .css file which has a background-color: red property
    productNameInputElement.classList.add("warning");
  }
}

productNameInputElement.addEventListener("input",updateRemainingCharacters);


1. const enteredText = event.target.value;: This gets the current value of the input field.

2. const enteredTextLength = enteredText.length;: This gets the length of the entered text.

3. const maxAllowedChars = productNameInputElement.maxLength;: This gets the maximum allowed length of the input field (which is 60 characters), because the max length we defined  

for the "product-name" input element
       <input
          type="text"
          id="product-name"
          name="product-name"
          maxlength="60"
        />
and the productNameInput const is equal to "product-name"

4. const remainingCharacters = maxAllowedChars - enteredTextLength;:
 This calculates the number of remaining characters.

5. remainingCharsElement.textContent = remainingCharacters;: This updates the text content of the span element with the remaining characters count, and that's because the remainingCharsElement = "remaining-chars" and that is the following span element.

<span id="charcount"> 
  <span id="remaining-chars"> //this one
      60 
   </span>
    /60 
 </span>

6. if (remainingCharacters <= 10) {
// If there are 10 or fewer remaining characters, this block of code is executed.

remainingCharsElement.classList.add("warning");
// Adds a "warning" class to the span element, which makes it display a red color because we defined in the CSS file that...

  #remaining-chars.warning { color: rgb(211, 109, 26); } //css file

that the warning which is a child of the remaining-chars id because we added(created) the warning class to the remainingCharsElement variable using the DOM and we gave it the following color(211, 109, 26); 



productNameInputElement.classList.add("warning");
//Adds a "warning" class to the input field, which also makes it display a red color, using the same logic as the one above
   input.warning{ background-color: rgb(248, 191, 145); } //css file
} //the closing bracket of the if-statement

} //the closing bracket of the entire function.

The last line of code which is the addEventListener:

productNameInputElement.addEventListener("input",updateRemainingCharacters);
so we're adding an event listner to our input element, so that whenever the user types something, the updateRemainingCharacters function is called,

This means that whenever the user types something, this function will be executed, updating the remaining characters count and adding a warning class if necessary, which is what the function does.




As for the event.target.value, this is the explanation:

`event.target.value` is a common pattern in JavaScript that refers to the value of the (element) that triggered the event("input" in our case)

In the context of your code, `event.target.value` is used to get the current value of the input field (`product-name`) whenever the user types something.

Here's a breakdown of what's happening:

* `event`: This is an object that represents the event that occurred. In this case, it's an `input` event,
//(becuase "input" is the event we added to our addEventListner) 
which is triggered whenever the user types something in the input field.

* `target`: This is a property of the `event` object that refers to the element that triggered the event. In this case, it's the input field (`product-name`) where the user is typing.

* `value`: This is a property of the `target` object that returns the current value of the input field.

So, when you combine these three parts, `event.target.value` returns the current value of the input field (`product-name`) at the moment when the `input` event occurs.

In other words, it's like saying: "Hey, what's the current value of the input field that triggered this event?"

*/
