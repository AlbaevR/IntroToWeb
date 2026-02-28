// Lab 4: Dynamic Gallery
const imageUrls = [
    'https://picsum.photos/id/1015/400/300',
    'https://picsum.photos/id/1016/400/300',
    'https://picsum.photos/id/1018/400/300',
    'https://picsum.photos/id/1020/400/300',
    'https://picsum.photos/id/1024/400/300',
    'https://picsum.photos/id/1025/400/300'
];

const gallery = document.getElementById('gallery');
let currentIndex = 0;

// Generate gallery dynamically
imageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 1}`;
    img.dataset.index = index;
    gallery.appendChild(img);
});

// Modal Elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Function to open modal
function openModal(index) {
    currentIndex = index;
    modalImg.src = imageUrls[currentIndex];
    modal.classList.add('show');
    modalImg.style.transform = 'scale(0.8)';
    setTimeout(() => modalImg.style.transform = 'scale(1)', 10);

    // Save last viewed image
    localStorage.setItem('lastImageIndex', currentIndex);
}

// Click on gallery image
gallery.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        openModal(Number(e.target.dataset.index));
    }
});

// Close modal
closeBtn.addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('show');
});

// Next / Previous navigation
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    modalImg.src = imageUrls[currentIndex];
    animateModalImage();
    localStorage.setItem('lastImageIndex', currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    modalImg.src = imageUrls[currentIndex];
    animateModalImage();
    localStorage.setItem('lastImageIndex', currentIndex);
});

// Animate modal image on change
function animateModalImage() {
    modalImg.style.transform = 'scale(0.8)';
    setTimeout(() => modalImg.style.transform = 'scale(1)', 50);
}

// Bonus: Open last viewed image on load
window.addEventListener('load', () => {
    const lastIndex = localStorage.getItem('lastImageIndex');
    if (lastIndex !== null) {
        openModal(Number(lastIndex));
    }
});