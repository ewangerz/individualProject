let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Increment the index
    slideIndex++;

    // Reset index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = 'block';

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}
showSlides();

// Get all FAQ question buttons
// Get all FAQ question buttons
// Get all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Get the corresponding answer element
        const answer = question.nextElementSibling;

        // Toggle the expanded class
        answer.classList.toggle('expanded');

        // Toggle active class for the question (for styling)
        question.classList.toggle('active');

        // Update the icon
        const icon = question.querySelector('.faq-icon');
        if (icon) {
            icon.textContent = icon.textContent === '+' ? '×' : '+';
        }
    });
});



const containers = document.querySelectorAll('.carousel-item');

containers.forEach(container => {
    const img = container.querySelector('img'); // Get the image inside the container
    const overlayText = container.querySelector('.overlay-text'); // Get the overlay text div
    overlayText.textContent = img.alt; // Set the text content to the image's alt attribute
});


const container1 = document.querySelectorAll('.slide');

container1.forEach(container1 => {
    const img1 = container1.querySelector('img'); // Get the image inside the container
    const overlayText1 = container1.querySelector('.overlay-text1'); // Get the overlay text div
    overlayText1.textContent = img1.alt; // Set the text content to the image's alt attribute
});


const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0; // Start at the first image
const itemsToShow = 3; // Number of visible items
const totalItems = carouselItems.length;

// Function to update the carousel position and manage arrow visibility
function updateCarousel() {
    const itemWidth = carouselItems[0].offsetWidth + 10; // Item width + gap
    const offset = currentIndex * itemWidth;
    carousel.style.transform = `translateX(-${offset}px)`; // Move the carousel

    // Manage arrow visibility
    leftArrow.disabled = currentIndex === 0; // Disable left arrow at the start
    rightArrow.disabled = currentIndex === totalItems - itemsToShow; // Disable right arrow at the end
}

// Scroll to the next set of items
rightArrow.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        updateCarousel();
    }
});

// Scroll to the previous set of items
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Initialize the carousel
updateCarousel();

const rotatingBox = document.querySelector('.rotating-box');

rotatingBox.addEventListener('click', () => {
    // Add the "rotate" class to start the animation
    rotatingBox.classList.add('rotate');

    // Remove the "rotate" class after the animation completes
    rotatingBox.addEventListener('animationend', () => {
        rotatingBox.classList.remove('rotate');
    }, { once: true }); // Use { once: true } to ensure the listener is removed after execution
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
