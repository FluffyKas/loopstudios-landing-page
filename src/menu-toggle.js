const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
  nav.classList.toggle("active");
});