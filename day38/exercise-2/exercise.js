// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
//answer1
var button1 = document.querySelector("button");
var button2 = document.getElementById("button2");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
//answer2
/*
function removeParagraph() {
  console.dir(button1);
}
function changeBackgroundColor(event) {
  console.dir(event.target);
}

button1.addEventListener("click", removeParagraph);
button2.addEventListener("click", changeBackgroundColor);
*/
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
//answer3
const firstParagraphElement = document.body.children[2].children[1];
console.log(firstParagraphElement);
const thirdParagraphElement = document.body.children[2].children[3];
// const thirdParagraphElement =
//   firstParagraphElement.nextElementSibling.nextElementSibling; another not needed but possible way of choosing the element of button2.
console.log(thirdParagraphElement);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
/*
//answer4
function removeParagraph() {
  thirdParagraphElement.remove(); //remember only write the function without brackets when you're writing them in thr addEventListner() so they won't take effect immediately and in other cases when we want the function's to take effect immediately we write it with the brackets in the end.
}
function changeBackgroundColor(event) {
  //firstParagraphElement.style.backgroundColor = "blue";
  //firstParagraphElement.className = "blue-bg";
  firstParagraphElement.classList.add("blue-bg"); //this and the 2 lines above are all possible solutions for this task
}

// button1.addEventListener("click", removeParagraph);
// button2.addEventListener("click", changeBackgroundColor);
*/
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
//answer5
function removeParagraph() {
  thirdParagraphElement.remove(); //remember only write the function without brackets when you're writing them in thr addEventListner() so they won't take effect immediately and in other cases when we want the function's to take effect immediately we write it with the brackets in the end.
}
function changeBackgroundColor(event) {
  //firstParagraphElement.style.backgroundColor = "blue";
  //firstParagraphElement.className = "blue-bg";
  firstParagraphElement.classList.add("blue-bg"); //this and the 2 lines above are all possible solutions for this task
}

button1.addEventListener("click", removeParagraph);
button2.addEventListener("click", changeBackgroundColor);
