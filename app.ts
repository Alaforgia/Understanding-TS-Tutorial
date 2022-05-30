// the number type after the params represents the return value type
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Void really just means that this function doesn't have a return type
function printResult(num: number): void {
  console.log("Result: ", +num);
}

printResult(add(5, 12));

let combineValues;

combineValues = add;

console.log(combineValues(8, 8));
