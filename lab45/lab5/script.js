let gallery = document.getElementById("gallery");

gallery.innerHTML = '<p class="loading">Loading images...</p>';

fetch("https://picsum.photos/v2/list?limit=5").then(response => response.json())
    .then(photos => {
        gallery.innerHTML = "";
        photos.forEach(photo => {
            let card = document.createElement("div");
            card.classList.add("image-card");
            card.innerHTML = `
             <img src="${photo.download_url}" alt="Image">
             <div class="image-caption">${photo.author}</div>
`            ;
            gallery.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching photos:", error);
        gallery.innerHTML = "<p>Error loading images. Please try again.</p>";
    });