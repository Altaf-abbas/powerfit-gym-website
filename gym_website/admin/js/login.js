// ================================
// Elements
// ================================

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("remember");
const togglePassword = document.getElementById("togglePassword");

// ================================
// Show / Hide Password
// ================================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// ================================
// Load Remember Me
// ================================

window.addEventListener("load", () => {

    const savedEmail = localStorage.getItem("gymAdminEmail");

    if (savedEmail) {

        email.value = savedEmail;
        remember.checked = true;

    }

});

// ================================
// Login Form
// ================================

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();
const adminEmail = "admin@powerfit.com";
const adminPassword = "123456";
    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    if (userEmail === "") {

        alert("Please enter email.");

        email.focus();

        return;

    }

    if (userPassword === "") {

        alert("Please enter password.");

        password.focus();

        return;

    }

    if (
        userEmail === adminEmail &&
        userPassword === adminPassword
    ) {

        if (remember.checked) {

            localStorage.setItem(
                "gymAdminEmail",
                userEmail
            );

        } else {

            localStorage.removeItem(
                "gymAdminEmail"
            );

        }

        // Future JWT Token
        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

});

// ================================
// Enter Key Support
// ================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        loginForm.requestSubmit();

    }

});