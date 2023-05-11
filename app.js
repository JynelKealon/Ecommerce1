// let sneakers = [
//     {
//     "name": "Adidas",
//     "price": 90,
//     "description": "Orange Rush / Core White / Gum"
//     },
//     {
//         "name": "Nike",
//         "price": 90,
//         "description": "Orange Rush / Core White / Gum" 
//     },
//     {
//         "name": "Jordan",
//         "price": 90,
//         "description": "Orange Rush / Core White / Gum" 
//     }
// ]
// const obj = Object.fromEntries(sneakers);
// console.log(obj);

//  Code along
//  const wrapper = document.querySelector(".sliderWrapper")
//  const menuItems = document.querySelectorAll(".menuItems")

//  menuItems.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         wrapper.style.transform = `translateX(${-100 * index}vw)`;

//      });
//  });


// // Get the slider wrapper and items
// const sliderWrapper = document.querySelector('.sliderWrapper');
// const sliderItems = document.querySelectorAll('.sliderItem');

// // Get the previous and next buttons
// const prevButton = document.querySelector('.prevButton');
// const nextButton = document.querySelector('.nextButton');

// // Set the index to 0
// let index = 0;

// // Add click event listeners to the buttons
// prevButton.addEventListener('click', () => {
//   // Decrement the index
//   index--;
//   // If the index is less than 0, set it to the last item index
//   if (index < 0) {
//     index = sliderItems.length - 1;
//   }
//   // Move the slider
//   sliderWrapper.style.transform = `translateX(-${index * 100}vw)`;
// });

// nextButton.addEventListener('click', () => {
//   // Increment the index
//   index++;
//   // If the index is greater than the last item index, set it to 0
//   if (index > sliderItems.length - 1) {
//     index = 0;
//   }
//   // Move the slider
//   sliderWrapper.style.transform = `translateX(-${index * 100}vw)`;
// });

// const sliderWrapper = document.querySelector('.sliderWrapper');
// const prevButton = document.querySelector('.prevButton');
// const nextButton = document.querySelector('.nextButton');
// let currentIndex = 0;
// const slideWidth = 100 / sliderWrapper.children.length;

// // Set up click event listeners for buttons
// prevButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentIndex < sliderWrapper.children.length - 1) {
//     currentIndex++;
//     sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
//   }
// });

// // Almost working code
// const wrapper = document.querySelector(".sliderWrapper");
// const navButtons = document.querySelectorAll(".navButton");

// navButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//         wrapper.style.transform = `translateX(${-100 * index}vw)`;
//     });
// });

// Hamburger menu JS
/*const menuWrapper = document.querySelector(".menuWrapper");
const menuItems = document.querySelectorAll(".menuItems");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menuWrapper.classList.contains("showMenu")) {
    menuWrapper.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuWrapper.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});*/


window.onload = function() {
  // This function will run when the window has finished loading

  fetch('../products.json')
    // Fetch the 'products.json' file from the server
    .then(response => response.json())
    // Convert the response to JSON format
    .then(data => {
      // Once the JSON data is available, perform the following actions

      let productHTML = '';
      // Create an empty string to store the HTML code for each product

      for (let i = 0; i < data.length; i++) {
        // Loop through each item in the 'data' array

        let current = data[i];
        // Store the current item in a variable called 'current'

        let product = `
          <div class="product">
            <span id="${current.id}" class="product-row-1">
              <img src="${current.img}">
            </span>
            <span class="product-row-1">
              <h2>${current.name}</h2>
            </span>
            <span class="product-row-1">
              <h4>${current.description}</h4>
            </span>
            <span class="product-row-1">
              <h5>${current.price}</h5>
            </span>
          </div>`;
        // Create the HTML code for a product using template literals, and assign it to the 'product' variable

        productHTML += product;
        // Add the HTML code for the current product to the 'productHTML' string
      }

      let products = document.getElementsByClassName('products')[0];
      // Get the element with the class 'products' (assuming there is only one), and store it in the 'products' variable

      products.innerHTML = productHTML;
      // Set the innerHTML of the 'products' element to the concatenated HTML code stored in 'productHTML'
    })

    .catch(error => console.error(error));
    // If there is an error during the fetch or JSON parsing, log the error to the console
};

