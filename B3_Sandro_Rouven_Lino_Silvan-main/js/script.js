// Ebenfalls vom Hamburger Tutorial
// https://www.youtube.com/watch?v=flItyHiDm7E 

const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");
const body = document.getElementById("body");
const game = document.getElementById("game-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
    body.classList.toggle("active");
    game.classList.toggle("active");
});