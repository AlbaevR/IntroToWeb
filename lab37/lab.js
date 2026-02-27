// lab 1

let fruits = [];

fruits.push("apple");
fruits.push("banana");
fruits.push("cherry");

let removedFruit = fruits.pop();
console.log(removedFruit);

console.log(fruits);

// lab 2

let numbers = [10, 20, 30, 40, 50];

let slicedNumbers = numbers.slice(1, 4);

console.log(slicedNumbers);
console.log(numbers);

// lab 3

let nums = [1, 2, 3, 4, 5];

let squaredNums = nums.map(num => num * num);

console.log("Original array:", nums);
console.log("Squared array:", squaredNums);

// lab 4

let ages = [12, 18, 25, 30, 15];

let adults = ages.filter(age => age >= 18);

console.log(adults);

// lab 5

let user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(user.name);

user.age = 26;
console.log(user);

// lab 6

let car = { brand: "Tesla", model: "Model S", year: 2023 };

console.log(Object.keys(car));
console.log(Object.values(car));

