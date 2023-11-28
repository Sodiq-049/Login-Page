const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Perform your server-side authentication here
            // This example assumes a simple check for demo purposes
            const isAuthenticated = authenticateUser(email, password);

            if (isAuthenticated) {
                // Redirect to the dashboard after successful login
                window.location.href = "/dashboard";
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });
    }

    function authenticateUser(email, password) {
        // Simulated authentication (replace with your server-side logic)
        // For simplicity, hardcoding a valid email and password
        return email === "user@example.com" && password === "password";
    }

    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID',
        });
    });
});

function startGoogleSignIn() {
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signIn().then(function (googleUser) {
        const profile = googleUser.getBasicProfile();
        const email = profile.getEmail();

        console.log('Google Sign-In successful. Email:', email);

        // Redirect or perform other actions as needed
        window.location.href = "/dashboard";
    }, function (error) {
        console.error('Google Sign-In failed:', error);
    });
}
