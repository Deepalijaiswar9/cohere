// toggle navbar here====================================
const mobileNav = document.querySelector(".mobileNavbarBtn");
const headerNav = document.querySelector(".header");

const toggleNavbar = () => {
    headerNav.classList.toggle("active");
};

mobileNav.addEventListener("click", () => toggleNavbar());
