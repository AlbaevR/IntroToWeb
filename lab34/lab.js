// lab 1

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// lab 2

let age = 20;
let isRegistered = true;

if (age >= 18 && isRegistered) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// lab 3

let num1 = 8;
let num2 = 12;

if (num1 > num2) {
    console.log("num1 is greater.");
} else if (num1 < num2) {
    console.log("num2 is greater.");
} else {
    console.log("Both numbers are equal.");
}

// lab 4

let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// lab 5

let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Sunday":
        console.log("It's a rest day.");
        break;
    default:
        console.log("It's a regular day.");
}

// lab 6

let num = 7;

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log("The number is:", result);