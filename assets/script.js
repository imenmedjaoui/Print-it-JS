const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	},
	
];
// Initialisation de l'index de la diapositive à 0
let slideIndex=0;

// Fonction pour charger une diapositive
function chargeSlide(){
	// Sélectionne l'élément avec la classe "banner-img" et met à jour son attribut src avec le chemin de l'image 
	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[slideIndex].image}`;
	// Sélectionne l'élément avec l'ID "banner p" et met à jour son contenu HTML 
	document.querySelector("#banner p").innerHTML = slides[slideIndex].tagLine;
	}

// Sélectionne l'élément HTML avec la classe "dots" et le stocke dans la variable dotsDiv
let dotsDiv=document.querySelector(".dots");	
// Crée un tableau vide appelé "dots" pour stocker les éléments de points (dots)
	let dots = [];
	// Parcours la liste des diapositives pour créer des éléments de point (dot) correspondants    
	for ( i = 0; i < slides.length; i++) {
	// Crée un nouvel élément de point (dot) en utilisant la méthode createElement	
	let dot=document.createElement('span');
	// Ajoute la classe "dot" à l'élément de point (dot) créé
	dot.classList.add("dot");
	// Ajoute l'élément de point (dot) à l'élément HTML avec la classe "dots" (dotsDiv)
	dotsDiv.appendChild(dot);
	// Si l'indice (i) correspond à l'indice de la diapositive actuelle (slideIndex), ajoute la classe "dot_selected" à l'élément de point (dot)
	if (i === slideIndex) {
        dot.classList.add('dot_selected');
    }
	}
	
	// Fonction pour mettre à jour les points (dots) en fonction de la diapositive actuelle
	function chargeDots() {
		// Sélectionne tous les éléments HTML avec la classe "dot" et les stocke dans la variable "bullet"
		const bullet = document.querySelectorAll(".dot");
	  
		// Parcourt chaque point (dot) dans la liste
		bullet.forEach((dot, i) => {
			// Si l'indice (i) correspond à l'indice de la diapositive actuelle (slideIndex), ajoute la classe "dot_selected" pour le mettre en surbrillance
		  	if (i === slideIndex) {
			dot.classList.add("dot_selected");
		  	} else {
			// Sinon, retire la classe "dot_selected" pour le désélectionner
			dot.classList.remove("dot_selected");
		  	}
		});
	}

// Sélectionne l'élément HTML avec la classe "arrow_left" et ajoute un écouteur d'événement "click" à cet élément.	
let arrowLeft = document.querySelector(".arrow_left");
    // Lorsque l'élément est cliqué, affiche "précédent" dans la console.
	arrowLeft.addEventListener ("click", () => {
		console.log("précédent");
		// Calcule la nouvelle valeur de l'indice de la diapositive (slideIndex) pour passer à la diapositive précédente.
		slideIndex = (slideIndex - 1 + slides.length) % slides.length;
		// Appelle une fonction "chargeSlide" pour charger la diapositive correspondante.	
		chargeSlide();
		// Appelle une fonction "chargeDots" pour mettre à jour les indicateurs de diapositive (dots).	
		chargeDots();
});
// Sélectionne l'élément HTML avec la classe "arrow_right" et ajoute un écouteur d'événement "click" à cet élément.
let arrowRight = document.querySelector(".arrow_right");
	// Lorsque l'élément est cliqué, affiche "suivant" dans la console.
	arrowRight.addEventListener("click", ()=> {
		console.log("suivant");
		// Calcule la nouvelle valeur de l'indice de la diapositive (slideIndex) pour passer à la diapositive suivante.
		slideIndex=(slideIndex + 1 ) % slides.length;
		// Appelle une fonction "chargeSlide" pour charger la diapositive correspondante.
		chargeSlide();
		// Appelle une fonction "chargeDots" pour mettre à jour les indicateurs de diapositive (dots).
		chargeDots();
});




 