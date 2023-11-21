//Alert and Prompts
/*
food = Number(prompt("how much for food"));
tipPercentage = Number(prompt("how much tip for the food") / 100);
tip = food * tipPercentage;
alert(tip);
alert(tip + food);
console.log(tip);
*/

// functions with return
/*
function sum(a, b) {
  console.log(a + b); //here the output is displayed in console and it doesnot return any function
}
num1 = sum(1, 3); //no value will be stored inside num1 but the values are passed to a and b
console.log(num1); // so this will be undefined

function sum(a, b) {
  return a + b;
}
num1 = sum(1, 3);
console.log(num1);

function calculateFood(food, tip) {
  tipPercentage = tip / 100;
  tip = food * tipPercentage;
  alert(tip);
  return sum(tip, food);
}
console.log(calculateFood(100, 50));
*/

//ES6
//arrow functions with explicit return
/*
const sum = (a, b) => {
  return a + b;
};
*/

//arrow functions with implicit return
//Imp: removes curly braces and so that we do not to write return
/*const sum1 = (a, b) => a + b;
console.log(sum1(1, 2));
*/

/*
//Arrays
const flower = [`lilly`, `rose`, `lotus`];
console.log(flower[1]);    //for func (),for array[] to be used
//Array methods
//Push
flower.push("hibiscus");
console.log(flower);

//Array Slice
console.log(flower.slice(0, 2));

//Array indexOf
console.log(flower.indexOf("rose"));

//Array length
console.log(flower.length);
*/
/*
//Objects{},key:value pairs
const person = {
  name: "apoo",
  age: 18,
};
//acces object:dot notation vs bracket notation
console.log(person.name);
console.log(person["age"]);

//assign object
person.place = `Hosanagara`;
console.log(person.place);
*/

//Pass an obj into func
/*
const about = (name, age) => {
  const person = {
    name: name,
    age: age,
    assests: 80000,
    liabilities: 30000,
    networth: function () {
      return this.assests - this.liabilities;
    },
  };

  const details = `Hi my name is ${person.name} and age is ${
    person.age
  } worth is ${person.networth()}`;
  return { details };
};
console.log(about("Maddy", 9));
*/
//Loops
/*const flowers = [`lilly`, `rose`, `lotus`, "dairy"];

for (const flower of flowers) {
  // same as for(i=0;i<=flowers.length;i++)

  console.log(flower);
}
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// for (const number in numbers) {
//   sum += Number(number);
//   //console.log(number);
//   console.log(sum);
// }

//for of
// function howManyletter() {
//   const phrase = "HI HOW ARE YOU";
//   for (const letter of phrase) {                                                        //in gives index, of gives letters in for loop
//     console.log(letter);
//   }
// }
// howManyletter();

// function howManyletter() {
//   const phrase = "HI HOW ARE YOU";
//   for (const letter in phrase) {
//     // console.log(phrase[letter]);
//     console.log(letter);
//   }
// }
// howManyletter();

//max of numbers
const numbers = [1, 2, 3, 4, 5, 7, 9, 9];

function Max() {
  for (const number of numbers) {
    let result = numbers[0];
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log(Max());