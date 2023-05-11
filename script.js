// Final slideshow js
// Select the element with the class "navButton" and id "previous"
const prevButton = document.querySelector(".navButton#previous");

// Select the element with the class "navButton" and id "next"
const nextButton = document.querySelector(".navButton#next");

// Select the element with the class "sliderWrapper"
const wrapper = document.querySelector(".sliderWrapper");

// Select the first element with the class "sliderItem" and get its width
const slideWidth = document.querySelector(".sliderItem").clientWidth;

// Initialize the slide index to 0
let slideIndex = 0;

// Add a click event listener to the prevButton element
prevButton.addEventListener("click", () => {
  // Check if the slideIndex is greater than 0
  if (slideIndex > 0) {
    // Decrement the slideIndex by 1
    slideIndex--;
    // Update the wrapper's transform property to slide the content to the left
    wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }
});

// Add a click event listener to the nextButton element
nextButton.addEventListener("click", () => {
  // Check if the slideIndex is less than 3 (assuming there are 4 slides)
  if (slideIndex < 3) {
    // Increment the slideIndex by 1
    slideIndex++;
    // Update the wrapper's transform property to slide the content to the right
    wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
  }
});

// Hamburger menu 
const hamburgerIcon = document.getElementById('hamburgerIcon');
const navMenu = document.querySelector('.navBottom');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
