// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:

const readline = require("readline-sync")

// A function that adds two numbers and returns the result
const add = function(num1,num2) {
    return num1 + num2;
};

// A function that subtracts two numbers and returns the result
const sub = function (num1, num2) {
    return num1 - num2;
};

// A function that multiplies two numbers and returns the result
const mul = function (num1, num2) {
    return num1 * num2;
};

// A function that divides two numbers and returns the result
const div = function (num1, num2) {
    return num1 / num2;
};

// Please enter your first number (store that number)
const num1 = readline.questionInt("Please enter your first number ");

// Please enter your second number (store that number)
const num2 = readline.questionInt("Please enter your second number ");

// Please enter the operation to perform: add, sub, mul, div (then store the operation)
const operations = ['add', 'sub', 'mul', 'div'],
    index = readline.keyInSelect(operations, "Please enter the operation to perform ");

let result;

// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
switch(operations[index]) {
    case "add":
        result = add(num1, num2);
        break;
    case "sub":
        result = sub(num1, num2);
        break;
    case "mul":
        result = mul(num1,num2);
        break;
    case "div":
        result = div(num1, num2);
        break;
}

// You will then print to the console: The result is: [the result]
if (index !== -1) {
    console.log("The result is: " + result);
} else {
    console.log("Operation Canceled")
}
