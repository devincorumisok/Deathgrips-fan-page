document.addEventListener('DOMContentLoaded', function() {
    // Function to handle any interactive elements or dynamic content
    function initializePage() {
        console.log('Page initialized');

        // Example: Add a click event to all links in the navigation
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Optional: Add some behavior on link click if needed
                console.log('Navigation clicked: ' + this.textContent);
            });
        });
    }

    initializePage();
});