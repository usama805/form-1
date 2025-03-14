document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous success/error messages
    document.getElementById('successMessage').style.display = 'none';
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });

    // Name validation
    const name = document.getElementById('name');
    if (name.value.trim() === "") {
        document.getElementById('nameError').style.display = 'block';
        name.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        name.style.borderColor = '#4CAF50';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "" || !emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        email.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        email.style.borderColor = '#4CAF50';
    }

    const phone = document.getElementById('phone');
    let phoneValue = phone.value.trim();

    // Strip all non-numeric characters from the phone number
    phoneValue = phoneValue.replace(/\D/g, ''); // \D matches anything that's not a digit

    // Check if the phone number is valid (10 digits)
    const phoneRegex = /^[0-10]{10}$/;
    if (phoneValue === "" || !phoneRegex.test(phoneValue)) {
        document.getElementById('phoneError').style.display = 'block';
        phone.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        phone.style.borderColor = '#4CAF50';
    }


    // Message validation
    const message = document.getElementById('message');
    if (message.value.trim() === "") {
        document.getElementById('messageError').style.display = 'block';
        message.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        message.style.borderColor = '#4CAF50';
    }

    // Show success message if all fields are valid
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    }
});
