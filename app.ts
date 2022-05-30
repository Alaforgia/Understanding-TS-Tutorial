// the number type after the params represents the return value type
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Void really just means that this function doesn't have a return type
function printResult(num: number): void {
  console.log("Result: ", +num);
}

printResult(add(5, 12));

// Type Function tells JS that what the var receives has to be a function.
// TS will accept the function printResult, but it is not a function that takes two arguments
// Function types are created with the arrow function from JS.
let combineValues: () => ;

combineValues = add;
combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));
