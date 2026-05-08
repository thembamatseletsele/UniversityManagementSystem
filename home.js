const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

// Show / Hide Password
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }
});

// Login Logic
form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMessage.textContent = "";

    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    if (!username || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    const storedUser = localStorage.getItem(username);

    if (!storedUser) {
        errorMessage.textContent = "Account does not exist.";
        setTimeout(() => {
            window.location.href = "signUP.html";
        }, 1500);
        return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password === password) {
        if (rememberMe) {
            localStorage.setItem("loggedInUser", username);
        }

        alert("Login successful! Welcome " + username);
        window.location.href = "Portal.html";
    } else {
        errorMessage.textContent = "Incorrect password.";
    }
});
