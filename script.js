
    
//slideshow code//
document.addEventListener("DOMContentLoaded", function () {
let slideIndex = 0; 
showSlides();

function plusSlides(n) {
    showSlides((slideIndex += n));
}
function currentSlide(n) {
    showSlides((slideIndex = n - 1)); 
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(showSlides, 3000);
});


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

   document.addEventListener("DOMContentLoaded", function () {
   function updateCurrentTime() {
    const currentTimeElement = document.getElementById("current-time");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // Add leading zero if needed
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = `CurrentTime: ${currentTimeString}`;


// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Call the function immediately to set the initial time
updateCurrentTime();

$(document).ready(function() {
  $('.menu-toggle').click(function() {
      $('.menu-links').toggleClass('show-menu');
  });
});
}});


//Making an image bounce
document.addEventListener("DOMContentLoaded", function () {
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
});
});

// Array Buffers
  // Collect form data
  document.addEventListener("DOMContentLoaded", function () {
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
  });

// Form Data
document.addEventListener("DOMContentLoaded", function () {
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let respone = await fetch('/article/formdata/post/user',{
        method: 'POST',
        body: new FormData (formElem)

    });

    let result = await respone.json();

    alert(result.message);
}
});
 
// not sure
document.addEventListener("DOMContentLoaded", function () {
window.addEventListener('scroll', function(){
    var navbar= this.document.querySelector("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});
});

// not really which code is this
document.addEventListener("DOMContentLoaded", function () {
window.onload = () => {
    document.getElementById('submitbtn').addEventListener("submit");
    }});
    
// back to top btn 
document.addEventListener("DOMContentLoaded", function () {

const images = document.querySelectorAll('.about-us-images');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.classList.add('image-hover'); // Add the hover class
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('image-hover'); // Remove the hover class
    });
});
});