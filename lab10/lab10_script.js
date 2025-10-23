console.log("Jalen Banks");

// Collect the elements
let myform = document.querySelector(".myform");
let greeting = document.querySelector(".greeting");
let displayusername = document.querySelector(".display_username");
let btnsubmit = document.querySelector(".btnsubmit");
let username_error_msg = document.querySelector(".username_error_msg");
let usernameInput = document.querySelector("#username");

// Disable submit button on page load
window.addEventListener("load", function () {
    btnsubmit.disabled = true;
});

// Username input validation
usernameInput.addEventListener("input", function () {
    let usernamevalue = usernameInput.value.trim();
    let usernameLength = usernamevalue.length;

    if (usernameLength >= 2 && usernameLength <= 20) {
        username_error_msg.textContent = "";
        username_error_msg.style.display = "none";
        btnsubmit.disabled = false;
        usernameInput.classList.add("active_input_valid");
        usernameInput.classList.remove("active_input_invalid");
    } else if (usernameLength > 20) {
        username_error_msg.textContent = "Username can't be 20+ characters";
        username_error_msg.style.display = "block";
        btnsubmit.disabled = true;
        usernameInput.classList.add("active_input_invalid");
        usernameInput.classList.remove("active_input_valid");
    } else {
        username_error_msg.textContent = "Username must be between 2 and 20 characters";
        username_error_msg.style.display = "block";
        btnsubmit.disabled = true;
        usernameInput.classList.add("active_input_invalid");
        usernameInput.classList.remove("active_input_valid");
    }
});

// Form submit event
myform.addEventListener("submit", function (event) {
    // Prevent the default form behavior
    event.preventDefault();

    // Collect the data
    let usernamevalue = usernameInput.value.trim();

    if (usernamevalue === "") {
        alert("Please enter a username");
        return;
    }

    // After validation passes, display greeting message with username
    greeting.style.display = "block";
    displayusername.textContent = usernamevalue;

    // Clear username text field
    usernameInput.value = "";

    // Reset button state
    btnsubmit.disabled = true;
    username_error_msg.style.display = "none";
    usernameInput.classList.remove("active_input_valid", "active_input_invalid");

    // Submit the form after validation (redirect to formsent.html)
    setTimeout(function () {
        window.location.href = "formsent.html";
    }, 2000);
});

// Password focus and blur events
const inputpassword = document.querySelector("#password");

// Add a focus event to the input
inputpassword.addEventListener("focus", function (event) {
    event.target.classList.add("active_input_valid");
});

// Add a blur event to the input
inputpassword.addEventListener("blur", function (event) {
    event.target.classList.remove("active_input_valid");
    event.target.classList.add("active_input_invalid");
});

// Word scramble game
const originalWord = "javascript";

// Function to shuffle the original word
function shuffleWord(word) {
    return word.split("")
        .sort(function () { return Math.random() - 0.5; })
        .join("");
}

// Show shuffled word
const shuffled = shuffleWord(originalWord);
const scramblewordElement = document.querySelector("#shuffleword");
scramblewordElement.textContent = shuffled;

// Collect the elements for word game
const guessInput = document.querySelector("#guessInput");
const wordFeedback = document.querySelector("#wordfeedback");

// Add the input event for word guessing
guessInput.addEventListener("input", function () {
    // Collect characters typed in the input without begin/end space and make lowercase
    const guess = guessInput.value.trim().toLowerCase();

    if (guess === originalWord) {
        wordFeedback.textContent = "Correct! Well done!";
        wordFeedback.classList.remove("active_input_invalid");
        wordFeedback.classList.add("active_input_valid");
        guessInput.classList.add("active_input_valid");
        guessInput.classList.remove("active_input_invalid");
    } else if (guess.length > 0) {
        wordFeedback.textContent = "Try again...";
        wordFeedback.classList.remove("active_input_valid");
        wordFeedback.classList.add("active_input_invalid");
        guessInput.classList.add("active_input_invalid");
        guessInput.classList.remove("active_input_valid");
    } else {
        wordFeedback.textContent = "";
        wordFeedback.classList.remove("active_input_valid", "active_input_invalid");
        guessInput.classList.remove("active_input_valid", "active_input_invalid");
    }
});

// EXERCISE
// Exercise: Username Availability Checker
// Mock database of taken usernames
const takenUsernames = ['admin', 'user123', 'testuser', 'guest', 'peterpan'];

// Get elements for the registration form
const registrationForm = document.querySelector("#registrationForm");
const newUsernameInput = document.querySelector("#newUsername");
const availabilityFeedback = document.querySelector("#availabilityFeedback");
const registerBtn = document.querySelector("#registerBtn");

// Function to check username availability
function checkUsernameAvailability() {
    const enteredUsername = newUsernameInput.value.trim().toLowerCase();

    // Clear previous feedback
    availabilityFeedback.classList.remove("available", "taken");

    if (enteredUsername === "") {
        availabilityFeedback.textContent = "";
        registerBtn.disabled = true;
        return;
    }

    // Check if username is taken
    if (takenUsernames.includes(enteredUsername)) {
        availabilityFeedback.textContent = "❌ Username is already taken";
        availabilityFeedback.classList.add("taken");
        registerBtn.disabled = true;
        newUsernameInput.classList.add("active_input_invalid");
        newUsernameInput.classList.remove("active_input_valid");
    } else {
        availabilityFeedback.textContent = "✅ Username is available";
        availabilityFeedback.classList.add("available");
        registerBtn.disabled = false;
        newUsernameInput.classList.add("active_input_valid");
        newUsernameInput.classList.remove("active_input_invalid");
    }
}

// Add input event listener for real-time checking
newUsernameInput.addEventListener("input", checkUsernameAvailability);

// Add focus event to show feedback area
newUsernameInput.addEventListener("focus", function () {
    if (newUsernameInput.value.trim() === "") {
        availabilityFeedback.textContent = "Start typing to check availability...";
        availabilityFeedback.classList.remove("available", "taken");
    }
});

// Add blur event to clear helper text if empty
newUsernameInput.addEventListener("blur", function () {
    if (newUsernameInput.value.trim() === "") {
        availabilityFeedback.textContent = "";
    }
});

// Handle registration form submission
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = newUsernameInput.value.trim().toLowerCase();
    const emailValue = document.querySelector("#email").value.trim();

    // Double-check username availability before submission
    if (takenUsernames.includes(enteredUsername)) {
        alert("Cannot register: Username is already taken!");
        return;
    }

    if (enteredUsername === "" || emailValue === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Simulate successful registration
    alert(`Registration successful!\nUsername: ${enteredUsername}\nEmail: ${emailValue}`);

    // Clear the form
    registrationForm.reset();
    availabilityFeedback.textContent = "";
    availabilityFeedback.classList.remove("available", "taken");
    registerBtn.disabled = true;
    newUsernameInput.classList.remove("active_input_valid", "active_input_invalid");
});

// Initialize register button as disabled
registerBtn.disabled = true;