//slideshow code//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



    document.addEventListener("DOMContentLoaded", function () {
        const myForm = document.getElementById("myForm");
        const successMessage = document.getElementById("success-message");

        myForm.addEventListener("submit", function (event) {
            let isValid = true;

            // Name validation
            const nameInput = document.getElementById("name");
            if (nameInput.value.trim() === "") {
                isValid = false;
                alert("Please enter your name.");
            }
    
            // Email validation
            const emailInput = document.getElementById("email");
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(emailInput.value)) {
                isValid = false;
                alert("Please enter a valid email address.");
            }

            // Message validation
            const messageInput = document.getElementById("message");
            if (messageInput.value.trim() === "") {
                isValid = false;
                alert("Please enter a message.");
            }

            // Number validation (optional)
            const numberInput = document.getElementById("number");
            if (numberInput.value.trim() !== "" && isNaN(numberInput.value)) {
                isValid = false;
                alert("Please enter a valid number.");
            }
            // Prevent form submission if validation fails
            if (!isValid) {
                event.preventDefault();
            }
        });
    });

   // script.js

   function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // Add leading zero if needed
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = `Current Time: ${currentTimeString}`;
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Call the function immediately to set the initial time
updateCurrentTime();

$(document).ready(function() {
  $('.menu-toggle').click(function() {
      $('.menu-links').toggleClass('show-menu');
  });
});



 