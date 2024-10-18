document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Regular expressions
    const nameRegex = /^[A-Za-z\-]+$/; // Only letters (upper/lowercase) and dashes are allowed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation: must contain "@" and a domain

    // Validation logic
    if (nameRegex.test(name) && emailRegex.test(email) && subject && message) {
        formMessage.style.display = 'none';
        alert("Merci, votre message a été envoyé !");
        // You can add logic here to actually send the form data (e.g., using an AJAX request)
    } else {
        formMessage.style.display = 'block';
        formMessage.textContent = "Veuillez vérifier les champs suivants :";
        
        // Detailed error messages
        if (!nameRegex.test(name)) {
            formMessage.textContent += " Nom (seulement des lettres et des tirets autorisés).";
        }
        if (!emailRegex.test(email)) {
            formMessage.textContent += " Email (doit contenir un '@' valide).";
        }
        if (!subject || !message) {
            formMessage.textContent += " Sujet et message ne doivent pas être vides.";
        }
    }
});