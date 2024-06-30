//console.log(window.document);
//console.log(document);this and the above do the same thing.

//console.dir(document);

//document.body.children[1].children[0].href = "https://google.com"; // so in this code(the .href="")we're changing the path inwhich the link is leading us to which google.com and it was basically just our local development server, all the dots are basically just the paths in javascript.
//the above indented code
//the defer attribute
//soultions to the error

//DOM (Document Object Model)

// let acnchorElement = document.getElementById("external-link");
// acnchorElement.href = "https://google.com"; the external-link id selector belongs to the anchor "a" element

// acnchorElement.href = document.querySelector("#external-link");
// acnchorElement.href = "https://academind.com";

//
//

//1. Adding elements using the DOM manipulation
//The three steps we typically execute when we add a new element

//no1 Create the new element,
document.createElement("a"); //this will create a new anchor element, The createElement() method in JavaScript is used to create a new element node in the Document Object Model (DOM). It takes one argument, which is the name of the element you want to create.

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

// no2 Get access to the parent element that should hold the new element,
let firstParagraph = document.querySelector("p");

// no3 insert the new element into the parent element.

firstParagraph.append(newAnchorElement); // The append() method in JavaScript is a part of the Document Object Model (DOM) and is used to add new content to an element. It is used to append a string of HTML, a text node, or another element to the end of an existing element.
// note! you could also use the appendChild method to add the element.

//2. Removing elements using the DOM manipulation.
//The two steps to remove an existing element.

//no1 Select the element that should be removed
let firstH1Element = document.querySelector("h1");

//no2 Remove it!
firstH1Element.remove();
//another way also could be to call firstH1Element.parentElement.removeChild(firstH1Element); its true that this way more complex and longer but its the only way which works on older browsers like internet explorer older versions.

//3. Moving an existing element using the DOM manipulation
firstParagraph.parentElement.append(firstParagraph); //or you can use insertBefore() method firstParagraph.parentElement.insertBefore(firstParagraph);

//innerHTML
console.log(firstParagraph.innerHTML);
//firstParagraph.textContent = "Hi This is <strong>important!</strong>"; //in this case the between brackets will be displayed as normal text including the stong element and will not be interpreted as code by the browser that's why we use innerHTML;
firstParagraph.innerHTML = "Hi This is <strong>important!</strong> "; //this innerHTML method unlike the textContent does not only take text as a value but could also take code alongside text.
//This is very useful because if we have more complex content that should be inserted we could just use the innerHTML method instead of creating elements with createElement() method and then appending them manually with the append() method.
