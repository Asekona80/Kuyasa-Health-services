function formValidation(){
var name=document.getElementById('first-name');
var last_name=document.getElementById('last-name');
var email=document.getElementById('email');
var  number=document.getElementById('phone-number');
var  message= document.getElementById('floatingTextarea');

//Validate name is not empty
if (name.trim()==='') {
    alert('Please enter your first name');
    Event.preventDefault();
    return false;  
}
//email validation
const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailPattern.text(email)) {
    alert('Enter a valid email  address');
    Event.preventDefault();
    return false;
}
//Phone number validation
if (number.trim() !=='' && !/^\d{10}$/.text(number)) {
    alert('Please enter 10 digit number');
    Event.preventDefault();
    return false;
}
//Validate message is not empty
if (message.trim()=='') {
    alert('Please enter a message');
    Event.preventDefault();
    return false;
}
return true;
}

var form=document.getElementById('form');
form.addEventListener('button',formValidation);



