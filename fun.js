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

var price = 1000;

function getPrice() {
  console.log("The old price is", price); // 1000
  // var price = 500;
  console.log("The new price is", price); // 1000
}

getPrice();

//answer + reason

//ex-1
console.log(a); // undefined
// var a = 50;
console.log(c); // 50

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
