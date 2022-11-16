let navEmail = document.getElementsByClassName("navbar-email")[0];
let desktopMenu = document.getElementsByClassName("desktop-menu")[0]

navEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}