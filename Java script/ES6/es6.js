//rest

function addNumber(a, b, c, ...other) {
  return a + b + c + other;
}
const res = addNumber(1, 2, 3, 4, 5);
console.log(res);

//spread
var names = ["nn", "mm", "mk"];
function getnames(n1, n2, n3, n4) {
  console.log(...names);
}
getnames();

//rest in objects

var students = {
  nme: "apoo",
  age: "3",
  state: "karnatka",
};
const { age, ...rest } = students;
console.log(students);

//spread in objects
var newstudents = {
  ...students,
  age: "30",
};
console.log(newstudents);

//async js programming
//promise,callbacks,async,& await

const datas = [
  { name: "apoo", id: "4" },
  { name: "ammu", id: "9" },
];
function getData() {
  let output = "";
  setTimeout(() => {
    datas.forEach((data, index) => {});
  }, 1000);
}
getData();

//Hoisting in Javacript is a phenomenon where function and variable can be accessed even before  the initialisation of the function
getfruits();
console.log(x);
var x = 7;

function getfruits() {
  console.log("apple");
}
