const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
});