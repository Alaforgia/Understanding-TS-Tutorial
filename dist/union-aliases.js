"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number" || "as-text") {
        // '+' in front of the params forces them to be numbers
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Tony", "as-text");
console.log(combinedNames);
