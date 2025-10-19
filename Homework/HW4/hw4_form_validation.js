// Form Validation JavaScript
// Get form and input elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Email validation regular expression
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password validation regular expression (contains #, $, or %)
const passwordRegex = /[#$%]/;

// Function to show error message
function showError(input, errorElement, message) {
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Function to show success (clear error)
function showSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.style.display = 'none';
}

// Function to hide success message
function hideSuccessMessage() {
    successMessage.style.display = 'none';
}

// Function to show success message
function showSuccessMessage() {
    successMessage.style.display = 'block';
}

// Function to validate name
function validateName() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        showError(nameInput, nameError, 'Name is required');
        return false;
    } else {
        showSuccess(nameInput, nameError);
        return true;
    }
}

// Function to validate email
function validateEmail() {
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError(emailInput, emailError, 'Email is required');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(emailInput, emailError, 'Please enter a valid email format (name@example.com)');
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

// Function to validate password
function validatePassword() {
    const password = passwordInput.value;
    
    if (password === '') {
        showError(passwordInput, passwordError, 'Password is required');
        return false;
    } else if (password.length < 5) {
        showError(passwordInput, passwordError, 'Password must be at least 5 characters long');
        return false;
    } else if (!passwordRegex.test(password)) {
        showError(passwordInput, passwordError, 'Password must contain at least one special character (#, $, or %)');
        return false;
    } else {
        showSuccess(passwordInput, passwordError);
        return true;
    }
}

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Hide success message initially
    hideSuccessMessage();
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    // Check if all validations pass
    if (isNameValid && isEmailValid && isPasswordValid) {
        // All fields are valid - show success message
        showSuccessMessage();
        
        // Optional: Clear the form after successful validation
        // form.reset();
        // Clear success styling
        // nameInput.classList.remove('success');
        // emailInput.classList.remove('success');
        // passwordInput.classList.remove('success');
    }
});

// Optional: Add real-time validation on input events
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);