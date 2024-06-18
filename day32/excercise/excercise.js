//no:1
// let courseName = "100 Days of code";
// let price = 59;
// let goals = ["learn programing", "gain extra knowledge", "become independent"];

//no:2
// alert(courseName);
// alert(price);
// alert(goals);

//no:3
let group = {
  courseName: "100 Days of code",
  coursePrice: 59,
  mainGoals: ["learn programing", "gain extra knowledge", "have fun"],
};

alert(group.courseName);
alert(group.coursePrice);
alert(group.mainGoals);

//no:4
alert(group.mainGoals[1]);

//no:5
function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}
//no:6
let firstGoal = getListItem(group.mainGoals, 0);
alert(firstGoal);

// Exercise Time, the excercises!
// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result
