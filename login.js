document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Prevent the form from submitting normally
    e.preventDefault();

    // Example: Validate the inputs (in reality, you'd need more robust validation)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) { // Simple validation
        // Here, you would validate the username and password
        // For demonstration, we're just navigating to the homepage
        window.location.href = 'home.html'; // Redirect to the main page
    } else {
        alert('Please enter both username and password');
    }
});
