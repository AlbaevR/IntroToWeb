// lab 1

function sum(a, b) {
    return a + b;
}

const square = (a) => a ** 2;

function max(min, max) {
    return Math.max(min, max)
}

console.log(max(7, 3));
console.log(square(7));
console.log(sum(4,5))

// lab 2

let message = "Hello from global";

function helloGlobal() {
    let localMessage = "Hello from function scope";
    console.log(localMessage);
}

helloGlobal();
console.log(message);
// console.log(localMessage); error

// lab 3

function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const count1 = counter();
count1();
count1();

const count2 = counter();
count2();

