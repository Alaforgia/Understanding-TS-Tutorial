"use strict";
// the number type after the params represents the return value type
function add(n1, n2) {
    return n1 + n2;
}
// Void really just means that this function doesn't have a return type
function printResult(num) {
    console.log("Result: ", +num);
}
// cb(callback) takes in a number, but return void
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// Type Function tells JS that what the var receives has to be a function.
// TS will accept the function printResult, but it is not a function that takes two arguments
// Function types are created with the arrow function from JS.
// Below, we are telling TS that combineValues has to take in a function that has two params that are numbers,
// and returns a number.
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// TS does not error if you return result. It is on purpose, since type void tells TS to ignore any result we might be returning
addAndHandle(10, 20, (result) => {
    console.log(result);
    // return result;
});
