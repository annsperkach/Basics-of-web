//task1
function validateFullName() {
    // Get the full name input field
    var fullNameInput = document.querySelector("#fullName");
    // Get the full name value
    var fullName = fullNameInput.value;
    // Get the error message element
    var errorMessage = document.querySelector("#nameError");
    // Validate the full name
    var nameRegex = /^[a-zA-ZА-Яа-яґҐєЄіІїЇ]+ [A-ZА-ЯҐЄІЇ]\.[A-ZА-ЯҐЄІЇ]\.$/;
    if (!nameRegex.test(fullName)) {
      // Highlight the input field with a red border
      fullNameInput.style.border = "2px solid red";
      // Set the error message
      errorMessage.innerHTML = "Full Name must be in the format  ТТТТТТ Т.Т.";
    } else {
      // Remove the red border
      fullNameInput.style.border = "";
      // Clear the error message
      errorMessage.innerHTML = "";
    }
  }
  // Get the full name input field
  var fullNameInput = document.querySelector("#fullName");
  // Add the input event listener
  fullNameInput.addEventListener("input", validateFullName);


  function validateEmail() {
    // Get the email input field
    var emailInput = document.querySelector("#email");
    // Get the email value
    var email = emailInput.value;
    // Get the error message element
    var errorMessage = document.querySelector("#emailError");
    // Validate the email
    var emailRegex = /^\w+[@]\w+([.]com)$/;
    if (!emailRegex.test(email)) {
      // Highlight the input field with a red border
      emailInput.style.border = "2px solid red";
      // Set the error message
      errorMessage.innerHTML = "Email must be in format тттттт@ттттт.com";
    } else {
      // Remove the red border
      emailInput.style.border = "";
      // Clear the error message
      errorMessage.innerHTML = "";
    }
  }
// Get the email input field
var emailInput = document.querySelector("#email");
// Add the input event listener
emailInput.addEventListener("input", validateEmail);


function validateBirthday() {
    // Get the birthday input field
    var birthdayInput = document.querySelector("#birthday");
    // Get the birthday value
    var birthday = birthdayInput.value;
    // Get the error message element
    var errorMessage = document.querySelector("#birthdayError");
    // Validate the birthday
    var birthdayRegex = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
    if (!birthdayRegex.test(birthday)) {
      // Highlight the input field with a red border
      birthdayInput.style.border = "2px solid red";
      // Set the error message
      errorMessage.innerHTML = "Birthday must be in the format ЧЧ.ЧЧ.ЧЧЧЧ";
    } else {
      // Remove the red border
      birthdayInput.style.border = "";
      // Clear the error message
      errorMessage.innerHTML = "";
    }
  }
// Get the birthday input field
var birthdayInput = document.querySelector("#birthday");
// Add the input event listener
birthdayInput.addEventListener("input", validateBirthday);



function validateTelegramUsername() {
    // Get the Telegram username input field
    var usernameInput = document.querySelector("#telegram");
    // Get the Telegram username value
    var username = usernameInput.value;
    // Get the error message element
    var errorMessage = document.querySelector("#telegramError");
    // Validate the Telegram username
    var usernameRegex = /^@[\w_]+$/;
    if (!usernameRegex.test(username)) {
      // Highlight the input field with a red border
      usernameInput.style.border = "2px solid red";
      // Set the error message
      errorMessage.innerHTML = "Telegram username must be in the format @T_TTTTT";
    } else {
      // Remove the red border
      usernameInput.style.border = "";
      // Clear the error message
      errorMessage.innerHTML = "";
    }
  }
// Get the Telegram username input field
var usernameInput = document.querySelector("#telegram");
// Add the input event listener
usernameInput.addEventListener("input", validateTelegramUsername);


function validateAddress() {
    // Get the address input field
    var addressInput = document.querySelector("#address");
    // Get the address value
    var address = addressInput.value;
    // Get the error message element
    var errorMessage = document.querySelector("#addressError");
    // Validate the address
    var addressRegex = /^[м]?[с]?(смт)?[.]\s?([А-ЯІЇЄ][а-яіїє]+\s?)+$/;
    if (!addressRegex.test(address)) {
      // Highlight the input field with a red border
      addressInput.style.border = "2px solid red";
      // Set the error message
      errorMessage.innerHTML = "Address must be in the format м. ЧЧЧЧЧЧ";
    } else {
      // Remove the red border
      addressInput.style.border = "";
      // Clear the error message
      errorMessage.innerHTML = "";
    }
  }
// Get the address input field
var addressInput = document.querySelector("#address");
// Add the input event listener
addressInput.addEventListener("input", validateAddress);
  

function displayData() {
    // Get the form element
    var form = document.querySelector("#form");
    // Get the input fields
    var fullNameInput = form.querySelector("#fullName");
    var emailInput = form.querySelector("#email");
    var birthdayInput = form.querySelector("#birthday");
    var telegramInput = form.querySelector("#telegram");
    var addressInput = form.querySelector("#address");
    // Get the input values
    var fullName = fullNameInput.value;
    var email = emailInput.value;
    var birthday = birthdayInput.value;
    var telegram = telegramInput.value;
    var address = addressInput.value;
    // Get the data element
    var data = document.querySelector("#data");
    // Check if any of the input fields are invalid
    if (fullNameInput.style.border === "2px solid red" ||
        emailInput.style.border === "2px solid red" ||
        birthdayInput.style.border === "2px solid red" ||
        telegramInput.style.border === "2px solid red" ||
        addressInput.style.border === "2px solid red") {
      // Show an alert message
      alert("Please enter valid input for all fields");
    } else {
      // Set the data element to display the input values
      data.innerHTML = "Full Name: " + fullName + "<br>" +
                       "Email: " + email + "<br>" +
                       "Birthday: " + birthday + "<br>" +
                       "Telegram: " + telegram + "<br>" +
                       "Address: " + address;
    }
  }
// Get the form element
var form = document.querySelector("#form");
// Add the submit event listener
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  // Call the displayData() function
  displayData();
});