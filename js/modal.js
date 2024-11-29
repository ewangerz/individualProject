const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const tiltImages = document.querySelectorAll('.image-tilt img');

tiltImages.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // Horizontal tilt
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30; // Vertical tilt
        image.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'rotateX(0) rotateY(0)';
    });
});

// Get the back-to-top button
const backToTop = document.getElementById('backToTop');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show when scrolled 200px
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Scroll to the top when the button is clicked
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

// Select all image containers
const containers = document.querySelectorAll('.image-container');

containers.forEach(container => {
    const img = container.querySelector('img'); // Get the image inside the container
    const overlayText = container.querySelector('.overlay-text'); // Get the overlay text div
    overlayText.textContent = img.alt; // Set the text content to the image's alt attribute
});

// Function to open the popup with the clicked image
function openPopup(imageElement) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');

    popupImage.src = imageElement.src; // Set the popup image source
    popup.style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('image-popup');
    popup.style.display = 'none'; // Hide the popup
}


