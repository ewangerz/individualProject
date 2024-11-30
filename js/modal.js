const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const tiltImages = document.querySelectorAll('.image-tilt img');

// Check if the user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!prefersReducedMotion.matches) {
    // If animations are allowed, enable the tilt effect
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
} else {
    // If animations are turned off, ensure no tilt effect is applied
    tiltImages.forEach(image => {
        image.style.transform = 'none';
    });
}


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
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement; // Refers to the <html> element

// Check and apply saved theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the data-theme attribute
    rootElement.setAttribute('data-theme', newTheme);

    // Save the new theme preference in localStorage
    localStorage.setItem('theme', newTheme);
});
