

<script>
    // Example JavaScript for interactivity

    // Function to display a greeting message when the page loads
    function displayGreeting() {
        alert("Welcome to our website!");
    

    // Function to validate a contact form before submission
    function validateForm() 
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        if (name === "" || email === "") 
            alert("Please fill in all fields.");
            return false;
        

        // Additional validation logic can be added here

        return true;
    

    // Event listener to call the displayGreeting function when the page loads
    window.addEventListener("load", displayGreeting);

    // You can add more JavaScript functions and event listeners as needed
</script>
