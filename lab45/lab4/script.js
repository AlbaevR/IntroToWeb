
let searchInput = document.getElementById("searchInput");
let userList = document.getElementById("userList");
let noResults = document.getElementById("noResults");

let allUsers = [];

function displayUsers(users) {
    userList.innerHTML = "";

    if (users.length === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
        users.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
                <div class="user-company">${user.company.name}</div>
            `;
            userList.appendChild(li);
        });
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        allUsers = users;
        displayUsers(users);
    })
    .catch(error => {
        console.error("Error fetching users:", error);
        userList.innerHTML = "<li>Error loading users. Please try again.</li>";
    });

searchInput.addEventListener("input", function() {
    let searchTerm = this.value.toLowerCase();
    let filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
});