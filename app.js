function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   throw new Error("Incorrect input!");
    // }
    // storing numbers in a var removes the conversion to string in console log
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0 same number
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple type
// } = {
//   name: "Tony",
//   age: 32,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], // Tuple
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Tony",
    age: 32,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push("admin"); // push is an exception that is allowed in tuples
// person.role[1] = 10;
// person.role = [0, "admin", "user"];
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // ERROR map is available on arrays, but not strings
}
if (person.role === Role.ADMIN) {
    console.log("is author");
}
