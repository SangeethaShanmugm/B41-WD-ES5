// var - we can redeclare and reassign
// let - we cannot redeclare but can reassign
// const - we cannot redeclare  nor reassign

var a = 10;

// var a  - declaration
// a = 10 - assigment

var a = 10;
//10

var a = 11;
var a = 12;
console.log(a); // 12

let b = 11;
b = 12;
console.log(b); //

const c = 11;
c = 12;
console.log(c); //
