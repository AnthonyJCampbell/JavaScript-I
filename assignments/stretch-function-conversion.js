// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};
// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = () => {
    return "Hello world!";
}
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (x,y) => {
    return (x+y);
}

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (x,y) => {return (x-y)};

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = (exampleArray) => exampleArray.map = (num) => {
    return num*3;
};