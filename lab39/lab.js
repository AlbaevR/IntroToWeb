// lab 1

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 5000);

console.log("End");

// lab 2

function delayedMessage (msg){
    setTimeout(() => {
        console.log(msg);
    },
        3000);
}

delayedMessage("Hello after 3 seconds!");

// lab 3

function startCounter() {
    let counter = 1;

    let intervalId = setInterval(() => {
        console.log(`Counter: ${counter}`);
        counter++;

        if (counter > 100) {
            clearInterval(intervalId);
        }
    }, 10);
}

startCounter();

// lab 4

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .finally(() => {
        console.log("Request completed");
    });

// lab 5

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data received");
            } else {
                reject("Error: Failed to fetch data");
            }
        }, 2000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Request completed");
    });