//console.log(window.document);
//console.log(document);this and the above do the same thing.

//console.dir(document);

//document.body.children[1].children[0].href = "https://google.com"; // so in this code(the .href="")we're changing the path inwhich the link is leading us to which google.com and it was basically just our local development server, all the dots are basically just the paths in javascript.
//the above indented code
//the defer attribute
//soultions to the error

//DOM (Document Object Model)

// let acnchorElement = document.getElementById("external-link");
// acnchorElement.href = "https://google.com";

// acnchorElement.href = document.querySelector("#external-link");
// acnchorElement.href = "https://academind.com";

// Exercise Time!
//The tasks:
// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

/*
//1 
let h1var = document.body.children[0];
//it could also be solved this way document.body.firstElementChild; (because no 0 is basically the first element child)
console.dir(h1var);
//no2
console.dir(h1var.parentElement);
//the bonus
h1var = document.body.children[1];
//no3
h1var = document.getElementById("newVar");
console.dir(h1var);
//no4
let paragraph = document.querySelector(".paragraph");
console.dir(paragraph);
//no5
let para = (document.querySelector(".paragraph").textContent = "New content");
//you could also do it this way para = document.body.children[1].textContent = "New Content".
console.log or console.dir(para); 
*/
