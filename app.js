// the number type after the params represents the return value type
function add(n1, n2) {
    return n1 + n2;
}
// Void really just means that this function doesn't have a return type
function printResult(num) {
    console.log("Result: ", +num);
}
printResult(add(5, 12));
// Type Function tells JS that what the var receives has to be a function
var combineValues;
combineValues = add;
combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
