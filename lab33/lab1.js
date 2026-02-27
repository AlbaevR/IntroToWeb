// lab 1
console.log("JavaScript loaded!");
alert("Welcome to JavaScript!");

// lab 2
var userName = "Alice";
let age = 25;
const country = "USA";

console.log(userName, age, country);

userName = "Bob";
age = 30;

console.log(userName, age, country);

// lab 3
let name = "John";
let age2 = 28;   // renamed to avoid conflict
let isStudent = true;
let score = null;
let address;

console.log("Name:", name, "- Type:", typeof name);
console.log("Age:", age2, "- Type:", typeof age2);
console.log("Is Student:", isStudent, "- Type:", typeof isStudent);
console.log("Score:", score, "- Type:", typeof score);
console.log("Address:", address, "- Type:", typeof address);

// lab 4
let userName2 = prompt("What is your name?");
let userAge = prompt("What is your age?");

alert("Hello, " + userName2 + "! You are " + userAge + " years old!");