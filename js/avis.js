// Récupérer le formulaire et la section des avis
const avisForm = document.getElementById('avisForm');
const avisListe = document.getElementById('avisListe');

// Écouter la soumission du formulaire
avisForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const comment = document.getElementById('comment').value;
    const stars = document.querySelector('input[name="star"]:checked') ? document.querySelector('input[name="star"]:checked').value : 0;

    // Créer un nouveau div pour l'avis
    const avisDiv = document.createElement('div');
    avisDiv.classList.add('avis');

    // Construire le contenu de l'avis
    avisDiv.innerHTML = `
        <h4>${name} (${age} ans) - ${profession}</h4>
        <p>Note : ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</p>
        <p>${comment}</p>
    `;

    // Ajouter l'avis à la liste
    avisListe.appendChild(avisDiv);

    // Réinitialiser le formulaire
    avisForm.reset();
});