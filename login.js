function login(username, password) {
    return username === "admin" && password === "123";
}

// Browser logic
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        if (login(username, password)) {
            message.textContent = "Login Successful!";
            message.style.color = "green";
        } else {
            message.textContent = "Invalid Username or Password.";
            message.style.color = "red";
        }
    });
}

// Export for Jest
if (typeof module !== "undefined") {
    module.exports = login;
}
