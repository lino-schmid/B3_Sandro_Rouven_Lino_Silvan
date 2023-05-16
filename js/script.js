// Ebenfalls vom Hamburger Tutorial
// https://www.youtube.com/watch?v=flItyHiDm7E 

const hamburger = document.getElementsByClassName("hamburger");
const navItems = document.getElementsByClassName("nav-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
});