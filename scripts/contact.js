// contact button link functionality

console.log("contact.js loaded");

const emailBtn = document.getElementById("emailBtn");
const linkedinBtn = document.getElementById("linkedinBtn");

emailBtn.addEventListener("click", function() {
    window.open("mailto:benedikt.safigan@colorado.edu", "_blank");
});

linkedinBtn.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/benedikt-safigan-cu", "_blank");
});