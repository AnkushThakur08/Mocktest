document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const date = document.getElementById('date').value;
  const color = document.getElementById('color').value;

  // Clear previous error messages
  clearErrors();

  // Validate each field
  let isValid = true;

  if (!validateName(name)) {
    isValid = false;
    showError('name-error', 'Name is required');
  }

  if (!validateEmail(email)) {
    isValid = false;
    showError('email-error', 'Email is required and must be valid');
  }

  if (!validatePhone(phone)) {
    isValid = false;
    showError('phone-error', 'Phone number is required');
  }

  if (!validatePassword(password)) {
    isValid = false;
    showError('password-error', 'Password is required and must be at least 6 characters long');
  }

  if (!validateAge(age)) {
    isValid = false;
    showError('age-error', 'Age is required and must be a positive number');
  }

  if (!validateGender(gender)) {
    isValid = false;
    showError('gender-error', 'Gender is required');
  }

  if (!validateDate(date)) {
    isValid = false;
    showError('date-error', 'Date is required');
  }

  if (!validateColor(color)) {
    isValid = false;
    showError('color-error', 'Color is required');
  }

  // Submit the form if all fields are valid
  if (isValid) {
    document.getElementById('registration-form').submit();
  }
});

function validateName(name) {
  return name.trim() !== '';
}

function validateEmail(email) {
  // Use a simple regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  return phone.trim() !== '';
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateAge(age) {
  return age.trim() !== '' && Number(age) > 0;
}

function validateGender(gender) {
  return gender !== '';
}

function validateDate(date) {
  return date.trim() !== '';
}

function validateColor(color) {
  return color.trim() !== '';
}

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}
