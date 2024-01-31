function validateForm() {
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (!username || !email || !password) {
        document.getElementById('error-message').innerText = 'All fields are required';
        return false;
    }

    return true;
}
JS