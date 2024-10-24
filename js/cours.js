window.addEventListener('scroll', function() {
    // Récupérer la position de défilement
    let scrollPosition = window.scrollY;
    
    // Sélectionner l'image de la bannière
    const bannerImage = document.querySelector('.banner-image');
    
    // Ajuster l'opacité en fonction de la position de défilement (disparaît progressivement)
    // Plus vous descendez, plus l'image devient transparente
    if (scrollPosition <= 300) {
        bannerImage.style.opacity = 1 - scrollPosition / 300;
    } else {
        bannerImage.style.opacity = 0; // Assure que l'image disparaît complètement
    }
});