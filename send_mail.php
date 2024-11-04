<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer et sécuriser les données
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse e-mail de destination
    $to = "paulcardronpro@gmail.com";
    $email_subject = "Nouveau message de $name : $subject";

    // En-têtes de l'e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Contenu de l'e-mail
    $email_body = "Nom: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message\n";

    // Envoyer l'e-mail
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Merci, votre message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi de l'e-mail.";
    }
} else {
    echo "Méthode de requête non valide.";
}
?>