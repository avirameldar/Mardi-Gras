const nameError = document.getElementById('name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const submitError = document.getElementById('submit-error');


function validateName() {
    let name = document.getElementById('userName').value;

    if (name.length == 0) {
        nameError.innerHTML = '*Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*$/)) {
        nameError.innerHTML = '*Write your first name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateLastName() {
    let lastName = document.getElementById('lastName').value;

    if (lastName.length == 0) {
        lastNameError.innerHTML = '*Last Name is required';
        return false;
    }
    if (!lastName.match(/^[A-Za-z]*$/)) {
        lastNameError.innerHTML = '*Write your first name';
        return false;
    }
    lastNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = '*Valid Email is required';
        return false;
    }
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,5}$/)) {
        emailError.innerHTML = '*Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateLastName() || !validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = '*All fields are required';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000)
        return false;
    }
    else {

        setTimeout(function () { document.location = 'thankYou.html'; }, 300)
    }
}