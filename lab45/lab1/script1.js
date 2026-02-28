let userList = document.getElementById("userList");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
            `;
            userList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error fetching users:", error);
        userList.innerHTML = "<li>Error loading users. Please try again.</li>";
    });