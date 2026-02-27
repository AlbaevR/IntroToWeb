// lab 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// lab 2

let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}

// lab 3

let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10: "), 10);

} while (userInput <= 10);
console.log("Valid input received: ", userInput);

// lab 4

let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// lab 5

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// lab 6

let numbers = [3, 7, 12, 5, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 12) {
        console.log("Number 12 found, stopping the loop.");
        break;
    }
}

// lab 7

numbers = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        continue;
    }
    console.log(numbers[i]);
}



