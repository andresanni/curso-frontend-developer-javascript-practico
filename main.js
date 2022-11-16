const menuEmail = document.getElementsByClassName("navbar-email")[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");


menuEmail.addEventListener("click",toggleDesktopMenu);
mobileMenuIcon.addEventListener("click",toggleMobileMenu);
menuCartIcon.addEventListener("click",toggleCartDetail);

function toggleDesktopMenu(){
    const isAsideProductDetailOpened = !asideProductDetail.classList.contains("inactive");

    if(isAsideProductDetailOpened)
    {
        asideProductDetail.classList.add("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideProductDetailOpened = !asideProductDetail.classList.contains("inactive");
    
    if(isAsideProductDetailOpened)
    {
        asideProductDetail.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCartDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

    if(isMobileMenuOpen){
    mobileMenu.classList.add("inactive");
   }
    
   asideProductDetail.classList.toggle("inactive");
}

