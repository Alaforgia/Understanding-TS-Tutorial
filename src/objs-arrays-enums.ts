function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }

  // storing numbers in a var removes the conversion to string in console log
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5; // 5.0 same number
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

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

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: "Tony",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); // push is an exception that is allowed in tuples
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

// as long as any is an array, it accepts it
let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR map is available on arrays, but not strings
}

if (person.role === Role.ADMIN) {
  console.log("is author");
}
