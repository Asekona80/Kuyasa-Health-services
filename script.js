// Get a reference to the form and error message container
const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Clear previous error messages
  errorMessages.innerHTML = '';

  // Get form values
  const name=document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('number').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation rules (you can customize these)
  if (name === '') {
    displayError('Name is required');
  }

  if (email === '') {
    displayError('Email is required');
  } else if (!isValidEmail(email)) {
    displayError('Invalid email format');
  }

    //Phone number validation
    if (number === '') {
        displayError('Please enter 10 digit number');
    }
    else if (!isValidNumber(number)) {
        displayError('Invalid number format');
      }
    
    //Validate message is not empty
    if (message === '') {
        displayError('Please enter a message');
    }
  // If no errors, submit the form (you can replace this with your submission logic)
  if (errorMessages.innerHTML === '') {
    alert('Form submitted successfully!');
    form.reset(); // Optionally, reset the form
  }
}

// Function to display error messages
function displayError(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
}

// Function to validate email using a simple regex
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
function isValidNumber(number) {
    const phonePattern = /^\d{10}$/; // Assumes a 10-digit format, modify for your region
    return phonePattern.test(number);
  }
// Attach the form validation function to the form's submit event
form.addEventListener('submit', validateForm)
