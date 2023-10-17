//slideshow code//
let slideIndex = 0; // Start with the first slide (0-based index)
showSlides();

// Next/previous controls

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls

function currentSlide(n) {
  showSlides((slideIndex = n - 1)); // Subtract 1 to match the 0-based index
  showSlides((slideIndex = n - 1));
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Increment slideIndex and reset to 0 if it exceeds the number of slides

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Start over from the first slide
    slideIndex = 1;
  }

  // Display the current slide and set the corresponding dot as "active"

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatically advance the slides every 3 seconds (adjust the interval as needed)

setInterval(showSlides, 3000);

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the user input
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const numberInput = document.getElementById("number").value;

  // Define regular expressions and flags for validation
  const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
  const emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/; // Email pattern
  const numberPattern = /^\d+$/; // Only digits

  // Test input against patterns
  const isNameValid = namePattern.test(nameInput);
  const isEmailValid = emailPattern.test(emailInput);
  const isNumberValid = numberPattern.test(numberInput);

  // Check validation results
  if (isNameValid && isEmailValid && isNumberValid) {
    // All fields are valid, you can proceed with form submission or other actions
    alert("Form submitted successfully!");
  } else {
    // Display error messages for invalid fields
    if (!isNameValid) {
      alert("Invalid name. Please enter a valid name.");
    }
    if (!isEmailValid) {
      alert("Invalid email. Please enter a valid email address.");
    }
    if (!isNumberValid) {
      alert("Invalid number. Please enter a valid number.");
    }
  }
});

// script.js

function updateCurrentTime() {
  const currentTimeElement = document.getElementById("current-time");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTimeString = `${hours}:${minutes}:${seconds}`;

rentTimeElement.textContent= `CurrentTime: ${currentTimeString}`;
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Call the function immediately to set the initial time
//updateCurrentTime();

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-links").toggleClass("show-menu");
  });
});

//Making an image bounce
const image = document.querySelector(".bounce-image");

function toggleBounce() {
  image.classList.toggle("bounce");
}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

function readFile(input) {
  let file = input.file[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onlaod = function () {
    console.log(reader.result);
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
}
//Flags code for the search button
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");

  searchButton.addEventListener("click", function () {
    const searchText = searchInput.value;
    const searchRegex = new RegExp(searchText, "ig");

    const sampleText = "health.";
    let matches = sampleText.match(searchRegex);

    if (matches) {
      searchResults.innerHTML = `<p>Found ${matches.length} match(es) for: ${searchText}</p>`;
    } else {
      searchResults.innerHTML = `<p>No results found for: ${searchText}</p>`;
    }
  });
});

<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
