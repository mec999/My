document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Expressions régulières pour validation
    const nameRegex = /^[A-Za-z\-]+$/; // Autorise seulement les lettres et les tirets
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valide les emails basiques

    // Validation des champs du formulaire
    if (nameRegex.test(name) && emailRegex.test(email) && subject && message) {
        formMessage.style.display = 'none'; // Cache le message d'erreur

        // Envoi des données via AJAX avec fetch()
        fetch('send_mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`
        })
        .then(response => response.text())
        .then(result => {
            // Affiche le message de confirmation ou d'erreur
            formMessage.style.display = 'block';
            formMessage.style.color = 'green';
            formMessage.textContent = "Merci, votre message a été envoyé avec succès.";
            // Réinitialise le formulaire après l'envoi
            document.getElementById('contactForm').reset();
        })
        .catch(error => {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.";
        });
    } else {
        // Affiche un message d'erreur si la validation échoue
        formMessage.style.display = 'block';
        formMessage.style.color = 'red';
        formMessage.textContent = "Veuillez vérifier les champs suivants :";

        // Messages d'erreur détaillés
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