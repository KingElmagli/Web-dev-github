let age;
let username = "Mustafa";
let hobbies = ["reading", "praying", "programming", "going to gym"];
let job = {
  title: "Developer",
  place: "NewYork",
  salary: 50000,
};

//let name;
function greet(name) {
  console.log("Hello " + name);
}
greet("Mustafa Osman");

function calcAge(userAge) {
  return userAge - 18;
}
let finalAge = calcAge(30);
console.log(finalAge); // Output: 12

let person = {
  name: "Max", //Property
  greet() {
    //Method (a function inside an object but without the function keyword)
    console.log("Hello");
  },
};
person.greet();
