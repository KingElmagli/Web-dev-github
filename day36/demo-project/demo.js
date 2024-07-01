const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  //let remainingCharacters = 60 - enteredTextLength; we can use this or the one below
  const maxAllowedChars = productNameInputElement.maxLength;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters; //we're not targeting the entire element but the text content
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
