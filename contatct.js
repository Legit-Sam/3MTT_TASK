document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Basic form validation
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const message = document.getElementById('message').value;

    if (firstName && lastName && email && position && message) {
        alert(`Thank you, ${firstName}! Your request has been received.`);
        document.getElementById('contactForm').reset(); // Clear form
    } else {
        alert('Please fill out all required fields.');
    }
});