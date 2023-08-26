function validateForm() {
    var name = document.forms["frmval"]["name"].value;
    var email = document.forms["frmval"]["email"].value;
    var message = document.forms["frmval"]["message"].value;
    var isValid = true;

    if (name === "") {
        displayError("nameError", "Fill the Name Box");
        isValid = false;
    } else {
        hideError("nameError");
    }

    if (email === "") {
        displayError("emailError", "Fill the Email Box");
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError("emailError", "Invalid Email format");
        isValid = false;
    } else {
        hideError("emailError");
    }

    if (message === "") {
        displayError("messageError", "Fill the Message Box");
        isValid = false;
    } else {
        hideError("messageError");
    }

    return isValid;
}

function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function displayError(id, message) {
    var errorElement = document.getElementById(id);
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
}

function hideError(id) {
    var errorElement = document.getElementById(id);
    errorElement.innerHTML = "";
    errorElement.style.display = "none";
}