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
  alert("Hello " + name);
}
greet("Mustafa Osman");

function calcAge(userAge) {
  return userAge - 18;
}
let finalAge = calcAge(30);
alert(finalAge); // Output: 12
