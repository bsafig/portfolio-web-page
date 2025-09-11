// code for back to top button

console.log("backtotop.js loaded");

const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});