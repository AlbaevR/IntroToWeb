let jokeSetup = document.getElementById("jokeSetup");
let jokePunchline = document.getElementById("jokePunchline");
let getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(joke => {
            jokeSetup.textContent = joke.setup;
            jokePunchline.textContent = joke.punchline;
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            jokeSetup.textContent = "Failed to load joke. Please try again.";
            jokePunchline.textContent = "";
        });
}

getJokeBtn.addEventListener("click", fetchJoke);

// Load a joke when page loads
fetchJoke();