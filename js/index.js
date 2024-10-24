window.addEventListener('scroll', function() {
    // Récupérer la position de défilement
    let scrollPosition = window.scrollY;
    
    // Sélectionner l'image de la bannière
    const bannerImage = document.querySelector('.banner-image');
    // Sélectionner le texte sur l'image
    const bannerText = document.querySelector('.banner-text');
    
    // Ajuster l'opacité de l'image en fonction de la position de défilement
    if (scrollPosition <= 400) {
        bannerImage.style.opacity = 1 - scrollPosition / 400;
        bannerText.style.opacity = 1 - scrollPosition / 400; // Appliquer la même logique pour le texte
    } else {
        bannerImage.style.opacity = 0.1; // Assure que l'image disparaît complètement
        bannerText.style.opacity = 0.1;  // Assure que le texte disparaît complètement
    }
});