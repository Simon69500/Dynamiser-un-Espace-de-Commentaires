// Sélection du formulaire
var form = document.querySelector("#comments-form");

// Ajout d'un écouteur d'événements pour le formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault();

 // Récupération des valeurs des champs du formulaire à l'intérieur de la fonction de gestion de l'événement
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var message = document.getElementById("message").value;

 // Vérification si les champs sont vides
    if (firstName.trim() === "" || lastName.trim() === "" || message.trim() === "") {
        document.getElementById("error-message").style.display = "block";
    } else {
  // Ajout du commentaire à la liste
        newComment(firstName + " " + lastName, message);

 // Effacement du contenu des champs du formulaire
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("message").value = "";

 // Cacher le message d'erreur s'il était affiché
        document.getElementById("error-message").style.display = "none";
    }
});

// Fonction pour ajouter un commentaire à la liste
function newComment(auteur, contenu) {
    var listComment = document.getElementById("comment-list");
    var newElement = document.createElement("div");
    newElement.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

    var contentHtml = `
        <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${auteur}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${contenu}</p>
            </div>
        </div>
    `;

    newElement.innerHTML = contentHtml;
    listComment.appendChild(newElement);
}
