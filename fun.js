//ES5 & ES6

//Scope - lifetime a variable
// let, const  -block scope
// {}  -block
//var  - function
{
  let y1 = 10;
  var y2 = 20;
}

// console.log(y1); // Uncaught ReferenceError: y1 is not defined
console.log(y2);

//not defined(error) vs undefined (value)

//Shadowing
var price = 1000;

function getPrice() {
  console.log("The old price is", price); // 1000
  var price = 500;
  console.log("The new price is", price); // 1000
}

getPrice();

//answer + reason

//ex-1
console.log(a); // undefined
// var a = 50;
// console.log(c); // 50

var b = 10;
console.log(b);

//JS  -> Does compilation happens? Yes
// code - binary(byte code)

//JIT - Just In Time Compilation
// 1. Compilation Phase
// 2. Execution Phase

// 1. Compilation Phase - JS &  context
console.log(a); // skip
var a = 50; // JS -> Do you know a? No| What is value -> context -> undefined
console.log(a); // skip

// 2. Execution Phase
console.log(a); //  JS -> Do you know a? yes | What is value? undefined
var a = 50; //  JS -> Do you know a? yes | Note down - context a -> 50
console.log(a); // JS -> Do you know a? yes | What is value -> 50

//ex -2
// console.log(a1);
// let a1 = 50;
// console.log(a1);

// // 1. Compilation Phase - JS &  context
// console.log(a1); // skip
// let a1 = 50; // JS -> Do you know a1? No| What is value -> dont initialize
// console.log(a1); // skip

// // 2. Execution Phase
// console.log(a1); //  JS -> Do you know a1? yes | What is value? Error
// let a1 = 50;
// console.log(a1);

//Object destructuring

// const avengers = {
//   name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "💖 love 2022",
// };

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionarie", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "💖 love 2022",
};

console.log(networth, power, skill);
//💰💰💰💰
//🤖
//["genius", "billionarie", "playboy", "philanthropist"]

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "💖 love 2022",
};

const avg1 = { ...avg, nation: "US", power: "💿" };
console.log(avg);
console.log(avg1);

const avg2 = { nation: "US", power: "💿", ...avg };

console.log(avg2);

//Shorthand

// const age = 20;
// const batch = "B41WD";

// const student = {
//   name: "mani",
//   age: age,
//   batch: batch,
// };

// console.log(student);

//object shorthand - key & value name must be same

const age = 20;
const batch = "B41WD";
const mark = 90;

const student = {
  name: "mani",
  age,
  batch,
  score: mark,
};

console.log(student);

function printDetails(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails(student));

function printDetails1({ name, score, batch }) {
  // const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails1(student));

//Template literals - `` ${} -  interpolation

//Arrow function = Template literals  + destructuring
const printDetails3 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(printDetails3(student));

//Import and export
//1 . named import and exports  -preferred
//2. default import and exports
