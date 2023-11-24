function authenticationUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
}

if (username === "user" && password === "pass") {
    showDashboard();
} else {
    alert("Invalid username or password. Please try again.");
}

function showDashboard() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}