const menuEmail = document.getElementsByClassName("navbar-email")[0];
const desktopMenu = document.getElementsByClassName("desktop-menu")[0];
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


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

// Product List Hardcode
const productsList=[];
productsList.push(
    {
        name:'Bike',
        price: 120,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Moto',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name:'Patin',
        price: 100,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    
)
// Function to add card for each product in document
function renderProductsFromArray(array){
productsList.forEach((product)=>{

    const productCard = document.createElement('div');
    productCard.classList.add("product-card");

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText="$" + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
   
//     cardsContainer.innerHTML +=
//     `<div class="product-card">
//         <img src=${product.img}alt=${product.name}>
//         <div class="product-info">
//         <div>
//              <p>$${product.price}</p>
//             <p>${product.name}</p>
//          </div>
        
//          <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//         </div>
//   </div>`;
 
})

}

//Call the fuction with our hardcoded array
renderProductsFromArray(productsList);