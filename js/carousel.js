const carousel = document.querySelector('.carousel');

<section class="carousel-section">
    <h2>Explorez nos Thèmes Musicaux</h2>
    <button class="prev">Précédent</button>
    <div class="carousel">
        <!-- vidéos ici -->
    </div>
    <button class="next">Suivant</button>
</section>

document.querySelector('.next').addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.prev').addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});