

    
//slideshow code//
document.addEventListener("DOMContentLoaded", function () {
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
    currentTimeElement.textContent = `CurrentTime: ${currentTimeString}`;
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

//Making an image bounce
const image = document.querySelector('.bounce-image');

function toggleBounce() {
    image.classList.toggle('bounce');
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }

  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let respone = await fetch('/article/formdata/post/user',{
        method: 'POST',
        body: new FormData (formElem)

    });

    let result = await respone.json();

    alert(result.message);
};

 
window.onload = () => {
document.getElementById('submitbtn').addEventListener("submit");
}

// Array Buffers
  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  // Convert data to an ArrayBuffer
  const encoder = new TextEncoder();
  const nameArrayBuffer = encoder.encode(name).buffer;
  const emailArrayBuffer = encoder.encode(email).buffer;
  const numArrayBuffer = encoder.encode(number).buffer;
  const messageArrayBuffer = encoder.encode(message).buffer;

  // Log the ArrayBuffers to the console
  console.log(nameArrayBuffer);
  console.log(emailArrayBuffer);
  console.log(messageArrayBuffer);

  // You can perform further actions with the ArrayBuffers here

});
});
