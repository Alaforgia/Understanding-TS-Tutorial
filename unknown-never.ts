let userInput: unknown;
let userName: string;
// The code below does not error w/ type unknown
userInput = 5;
userInput = "Tony";
// unknown is not guaranteed to be a string, so userName (type string) = userInput (type unknown) throws an error in TS.
if (typeof userInput === "string") {
  userName = userInput;
}

// Never is "clearer" than void, it is intended to never return something, where as void means that it doesn't have a return type.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occurred!", 500);
console.log(result);
