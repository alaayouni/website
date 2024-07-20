// Function to toggle mobile menu
function toggleMobileMenu(element) {
    element.classList.toggle('open');
    const mobileMenu = element.nextElementSibling;
    mobileMenu.classList.toggle('active');
}

// Function to toggle like button
function toggleLike(element) {
    element.classList.toggle('liked');
}

// Additional functions or event listeners specific to other pages as needed
