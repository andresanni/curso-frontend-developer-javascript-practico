let menuEmail = document.getElementsByClassName("navbar-email")[0];
let desktopMenu = document.getElementsByClassName("desktop-menu")[0];
let mobileMenuIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click",toggleDesktopMenu);
mobileMenuIcon.addEventListener("click",toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}