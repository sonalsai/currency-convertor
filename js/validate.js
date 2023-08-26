function validateForm() {
    var name = document.forms["frmval"]["name"].value;
    var email = document.forms["frmval"]["email"].value;
    var message = document.forms["frmval"]["message"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    if (message === "") {
        alert("message must be filled out");
        return false;
    } else if (isNaN(message)) {
        alert("message must be a number");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
