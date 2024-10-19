const miniImageOne = document.querySelector("#mini-image-one");
const miniImageTwo = document.querySelector("#mini-image-two");
const miniImageThree = document.querySelector("#mini-image-three");
const miniImageFour = document.querySelector("#mini-image-four");

const caroussel = document.querySelector(".caroussel-images");
const closebutton = document.querySelector("#close-button");
const nextbutton = document.querySelector("#carousel-right");
const previousbutton = document.querySelector("#carousel-left");
const presentationProduct = document.querySelector("#presentation-product");

const right = document.querySelector(".right");
const left = document.querySelector(".left");

const imagesLink = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let index = 0;

nextbutton.addEventListener("click", () => {
  index = (index + 1) % 4;
  presentationProduct.src = imagesLink[index];
  if (index == 0) {
    miniImageOne.style.opacity = "0.5";
    miniImageOne.style.border = "3px solid hsl(26, 100%, 55%)";
  } else {
    miniImageOne.style.opacity = "1";
    miniImageOne.style.border = "none";
  }
  if (index == 1) {
    miniImageTwo.style.opacity = "0.5";
    miniImageTwo.style.border = "3px solid hsl(26, 100%, 55%)";
  } else {
    miniImageTwo.style.opacity = "1";
    miniImageTwo.style.border = "none";
  }

  if (index == 3) {
    miniImageFour.style.opacity = "0.5";
    miniImageFour.style.border = "3px solid hsl(26, 100%, 55%)";
  } else {
    miniImageFour.style.opacity = "1";
    miniImageFour.style.border = "none";
  }

  if (index == 2) {
    miniImageThree.style.opacity = "0.5";
    miniImageThree.style.border = "3px solid hsl(26, 100%, 55%)";
  } else {
    miniImageThree.style.opacity = "1";
    miniImageThree.style.border = "none";
  }
});
previousbutton.addEventListener("click", () => {
  index = (index + 3) % 4;
  presentationProduct.src = imagesLink[index];
});

closebutton.addEventListener("click", () => {
  caroussel.style.display = "none";
  right.style.filter = "none";
  left.style.filter = "none";
});

miniImageOne.addEventListener("click", () => {
  caroussel.style.display = "flex";
  right.style.filter = "blur(5px)";
  left.style.filter = "blur(5px)";
});
miniImageTwo.addEventListener("click", () => {
  caroussel.style.display = "flex";
  right.style.filter = "blur(5px)";
  left.style.filter = "blur(5px)";
});
miniImageThree.addEventListener("click", () => {
  caroussel.style.display = "flex";
  right.style.filter = "blur(5px)";
  left.style.filter = "blur(5px)";
});
miniImageFour.addEventListener("click", () => {
  caroussel.style.display = "flex";
  right.style.filter = "blur(5px)";
  left.style.filter = "blur(5px)";
});

const add = document.querySelector("#add-button");
const decline = document.querySelector("#decline-button");
const numberofarticls = document.querySelector("#number-of-articls");
let number = 0;

add.addEventListener("click", () => {
  number++;
  numberofarticls.textContent = `${number}`;
  totalprice.textContent = `$${number * 125}`;
  numberofarticlepriceunit.textContent = `$125.00x${number}`;
  cartlogonotif.textContent = `${number}`;
});
decline.addEventListener("click", () => {
  if (number > 0) number--;
  numberofarticls.textContent = `${number}`;

  totalprice.textContent = `$${number * 125}`;
  numberofarticlepriceunit.textContent = `$125.00x${number}`;
  cartlogonotif.textContent = `${number}`;
});
const cartbutton = document.querySelector("#logo-cart");
const CART = document.querySelector(".cart");
cartbutton.addEventListener("click", () => {
  if (CART.style.display == "none") {
    CART.style.display = "block";
  } else {
    CART.style.display = "none";
  }
});

const addToCart = document.querySelector("#add-to-cart");
const thecartempty = document.querySelector("#the-cart-empty");

const finalproductionvalidation = document.createElement("div");
finalproductionvalidation.className = "finalproductionvalidation";

const miniimagesneaker = document.createElement("img");
miniimagesneaker.id = "miniimagesneaker";
miniimagesneaker.src = "images/image-product-1-thumbnail.jpg";
finalproductionvalidation.appendChild(miniimagesneaker); //------------------------------------------

const namePriceFinal = document.createElement("div");
namePriceFinal.className = "namePriceFinal";

const namefinal = document.createElement("p");
namefinal.id = "namefinal";
namefinal.textContent = "Fall Limited Edition Sneakers";
finalproductionvalidation.appendChild(namePriceFinal);
namePriceFinal.appendChild(namefinal);

const priceToatlFinal = document.createElement("div");
priceToatlFinal.className = "priceToatlFinal";

const numberofarticlepriceunit = document.createElement("p");
numberofarticlepriceunit.id = "numberofarticlepriceunit";
numberofarticlepriceunit.textContent = `$125.00x${number}`;
priceToatlFinal.appendChild(numberofarticlepriceunit);

const totalprice = document.createElement("p");
totalprice.id = "totalprice";

priceToatlFinal.appendChild(totalprice);
namePriceFinal.appendChild(priceToatlFinal);

const avatarimage = document.querySelector("#avatar-logo");
const garbagebutton = document.createElement("button");
garbagebutton.id = "grabagebutton";
const grabagelogo = document.createElement("img");
grabagelogo.id = "grabagelogo";
grabagelogo.src = "images/icon-delete.svg";
garbagebutton.appendChild(grabagelogo);
finalproductionvalidation.appendChild(garbagebutton);

garbagebutton.addEventListener("click", () => {
  finalproductionvalidation.remove();
  thecartempty.style.display = "block";
  cartlogonotif.textContent = "0";
  avatarimage.style.border = "none";
  checkoutbutton.remove();
});

const checkoutbutton = document.createElement("button");
checkoutbutton.textContent = "Checkout";
checkoutbutton.id = "checkoutbutton";

addToCart.addEventListener("click", () => {
  if (number >= 1) {
    CART.appendChild(finalproductionvalidation);
    CART.appendChild(checkoutbutton);
    thecartempty.style.display = "none";
    cartlogonotifcontainer.style.display = "flex";
    avatarimage.style.border = "3px solid hsl(26, 100%, 55%)";
    avatarimage.style.borderRadius = "100%";
  }
});

const cartlogonotifcontainer = document.querySelector(".cart-logo-notif");
const cartlogonotif = document.querySelector("#cart-logo-notif");
