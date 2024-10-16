document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (name && email && subject && message) {
        formMessage.style.display = 'none';
        alert("Merci, votre message a été envoyé !");
        // You can add logic here to actually send the form data (AJAX request, etc.)
    } else {
        formMessage.style.display = 'block';
    }
});