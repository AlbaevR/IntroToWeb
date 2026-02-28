let postsContainer = document.getElementById("postsContainer");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        posts.slice(0, 5).forEach(post => {
            let postCard = document.createElement("div");
            postCard.classList.add("post-card");
            postCard.innerHTML = `
                <div class="post-title">${post.title}</div>
                <div class="post-body">${post.body}</div>
            `;
            postsContainer.appendChild(postCard);
        });
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
        postsContainer.innerHTML = "<p>Error loading posts. Please try again.</p>";
    });