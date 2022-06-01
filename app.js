var userInput;
var userName;
// The code below does not error w/ type unknown
userInput = 5;
userInput = "Tony";
// unknown is not guaranteed to be a string, so userName (type string) = userInput (type unknown) throws an error in TS.
if (typeof userInput === "string") {
    userName = userInput;
}
