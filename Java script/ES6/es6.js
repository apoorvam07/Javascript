//rest

// function addNumber(a, b, c, ...other) {
//   return a + b + c + other;
// }
// const res = addNumber(1, 2, 3, 4, 5);
// console.log(res);

// //spread
// var names = ["nn", "mm", "mk"];
// function getnames(n1, n2, n3, n4) {
//   console.log(...names);
// }
// getnames();

// //rest in objects

// var students = {
//   nme: "apoo",
//   age: "3",
//   state: "karnataka",
// };
// const { age, ...rest } = students;
// console.log(students);

// //spread in objects
// var newstudents = {
//   ...students,
//   age: "30",
// };
// console.log(newstudents);

// //async js programming
// //promise,callbacks,async,& await

// const datas = [
//   { name: "apoo", id: "4" },
//   { name: "ammu", id: "9" },
// ];
// function getData() {
//   let output = "";
//   setTimeout(() => {
//     datas.forEach((data, index) => {});
//   }, 1000);
// }
// getData();

// //Hoisting in Javacript is a phenomenon where function and variable can be accessed even before  the initialisation of the function
// getfruits();
// console.log(x);
// var x = 7;

// function getfruits() {
//   console.log("apple");
// }

// //Blockscope
// {
//   //compound statement
//   var a = 1;
//   let b = 2;
//   let c = 3;
// }
//console.log(a, b, c); //only a is displayed because it is in global scope, let and const are in separate block

//closures

// For revision :
// Q)What is closure?
// A)The function bundled with its lexical environment closed to that function
// simply function + Lexical environment

// and closures have very special place in runtime environment

// The fun in JavaScript is you can assign a variable for a function and also you can pass function as a parameter even you can return the function in JavaScript!!

function XX() {
  function X() {
    var a = 7;
    return function y() {
      console.log(a);
    };
    y;
  }
  X;
}
var z = XX()();
z();
X()();
//console.log(z);

// Q)What does the closure do in my JavaScript programs?
// A) Whenever I call a function in JavaScript the closure maintains its values(lexical env.) and function in its own runtime and when that specific function executed, it returns with own environment even the variable vanished after its execution

// 13:54 : as variable value is changed before executing the return (the function) Value will be 100

// In closures, values in variable are 'pass by reference' hence there values can be changed, and whenever comes the closure inside closure(multilevel one) we can see the function refers the 'parent' variable
