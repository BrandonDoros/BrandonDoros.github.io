// Define a function to toggle the navigation menu on mobile devices
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// Attach an event listener to the mobile menu icon
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleMenu);

// Define a function to highlight the active page in the navigation menu
function highlightActivePage() {
    const links = document.querySelectorAll('nav ul li a');
    const currentLocation = location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the highlightActivePage function when the page is loaded
window.addEventListener('load', highlightActivePage);
// JavaScript source code
