// Burger menu functionality
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Clone the menu to set your own styles for the mobile version
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Perform actions on click
function hambHandler(e) {
  e.preventDefault();
  // Switching element styles on click
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Here we are rendering elements to our popup
function renderPopup() {
  popup.appendChild(menu);
}

// Code to close menu when link is clicked
const links = Array.from(menu.children);

// For each menu item, when clicked, we call the function
/*links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});*/

// Closing the popup when clicking on the menu
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// Swiper slider
const swiper = new Swiper(".mySwiper", {
  loop: true,
  /*pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },*/
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 20,
  slidesPerView: 3,
  breakpoints: {
    // when window width is >= 900px
    900: {
      slidesPerView: 3,
    },
    // when window width is >= 590px
    590: {
      slidesPerView: 2,
    },
    // when window width is >= 280px
    280: {
      slidesPerView: 1,
    },
  },
});
