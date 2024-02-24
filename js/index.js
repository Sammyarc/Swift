// LOADING INDICATOR

document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay to reduce the speed at which the site is rendered
    setTimeout(function () {
        document.querySelector(".pre-loader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2000); // Change the delay time (in milliseconds) as needed
});


const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// Toggle menu visibility function
function toggleMenu() {
    if (nav.style.display === "flex") {
        nav.style.display = "none"; // If currently displayed, hide it
    } else {
        nav.style.display = "flex"; // If currently hidden, display it
    }
}

// Event listener for the menu button
btn.addEventListener('click', () => {
    toggleMenu();
});

// Event listener for clicks on the document body
document.body.addEventListener('click', (event) => {
    const isMenuOpen = nav.style.display === "flex";
    const isClickInsideMenu = nav.contains(event.target);
    const isClickOnMenuButton = event.target === btn;

    if (isMenuOpen && !isClickInsideMenu && !isClickOnMenuButton) {
        // If the menu is open and the click is outside the menu or not on the menu button, close the menu
        toggleMenu();
    }
});

// Event listeners for menu links to close the menu when clicked
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});



// Select all FAQ toggle buttons
const faqToggleButtons = document.querySelectorAll('.faq-toggle');

// Function to handle FAQ toggle button click
function handleFaqToggleClick(event) {
    const button = event.currentTarget;
    const currentItem = button.closest('.item');
    const faqAnswer = currentItem.querySelector('.faq-answer');
    const expandIcon = button.querySelector('.expand-icon');

    // Close any open answer
    document.querySelectorAll('.faq-answer').forEach(answer => {
        if (answer !== faqAnswer && !answer.classList.contains('hidden')) {
            answer.style.display = 'none';
            // Reset the rotation for all other icons
            answer.closest('.item').querySelector('.expand-icon').classList.remove('rotate-180');
        }
    });

    // Toggle the rotation of the clicked icon
    expandIcon.classList.toggle('rotate-180');

    // Toggle the visibility of the answer
    faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
}

// Add click event listener to each FAQ toggle button
faqToggleButtons.forEach(button => {
    button.addEventListener('click', handleFaqToggleClick);
});

