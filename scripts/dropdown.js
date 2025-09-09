// code for dropdown menu on landing page

const dropdown = document.querySelector('.dropdown');
const button = dropdown.querySelector('.dropbtn');

// Toggle on click
button.addEventListener('click', function(e) {
    dropdown.classList.toggle('show');
});

// Close dropdown if clicking outside
window.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});