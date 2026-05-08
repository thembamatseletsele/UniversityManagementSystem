document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const studentID = document.getElementById("studentID").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!username || !studentID || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please sign in.");
        return;
    }

    // Store user using username as key
    const user = {
        username: username,
        studentID: studentID,
        email: email,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));

    // STEP 2: Redirect to login page
    alert("Account created successfully! Redirecting to Login page.");
    window.location.href = "home.html";
});