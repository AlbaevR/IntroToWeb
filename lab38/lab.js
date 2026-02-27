// lab 1

function parseJSON(jsonStr) {
    try {
        const parsedObject = JSON.parse(jsonStr);
        console.log(parsedObject);
    } catch (error) {
        console.error("Invalid JSON format");
    }
}

parseJSON('{"brand":"Tesla","model":"Model S","year":2023}');
parseJSON('{"brand:"Tesla}');

// lab 2

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log("Current number:", numbers[i]);

    if (numbers[i] % 2 === 0) {
        sum += numbers[i];
        console.log("Even number added. Current sum:", sum);
    }
}

console.log("Final sum of even numbers:", sum);

// lab 3

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

console.table(users);

// lab 4

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    } catch (error) {
        console.error("Cannot divide by zero");
    }
}

console.log(divide(100, 2));
console.log(divide(100, 0));

// lab 5

try {
    console.log(undefinedVariable);
} catch (error) {
    console.error("Variable is not defined");
}
