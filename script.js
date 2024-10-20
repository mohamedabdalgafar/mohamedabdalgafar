// Toggle navigation menu visibility
const navIcon = document.getElementById('nav-icon');
const navMenu = document.getElementById('nav-menu');

navIcon.addEventListener('click', () => {
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex'; // Show the menu
    } else {
        navMenu.style.display = 'none'; // Hide the menu
    }
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navIcon.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.style.display = 'none'; // Hide the menu if clicked outside
    }
});
