// Final slideshow js
const prevButton = document.querySelector(".navButton#previous");
const nextButton = document.querySelector(".navButton#next");
const wrapper = document.querySelector(".sliderWrapper");
const slideWidth = document.querySelector(".sliderItem").clientWidth;
let slideIndex = 0;

prevButton.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
    wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }
});

nextButton.addEventListener("click", () => {
  if (slideIndex < 3) {
    slideIndex++;
    wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }
});

// Hamburger menu
const hamburgerIcon = document.getElementById('hamburgerIcon');
const navMenu = document.querySelector('.navBottom');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
