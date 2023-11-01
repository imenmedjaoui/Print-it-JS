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

let slideIndex=0;
//crier l'ecouteur arrow_Left
let arrowLeft = document.querySelector(".arrow_left");//
 	arrowLeft.addEventListener("click", ()=> {
		console.log("précédent");
	
		slideIndex=(slideIndex - 1 + slides.length) % slides.length;
		chargeSlide();
	});

let arrowRight = document.querySelector(".arrow_right");//
	arrowRight.addEventListener("click", ()=> {
		console.log("suivant");

		slideIndex=(slideIndex + 1 ) % slides.length;
		chargeSlide();
	});
	
 // Create Dots
 let dotsDiv=document.querySelector(".dots");//
 for ( i = 0; i < slides.length; i++) {
   let dot=document.createElement('span');
   dot.classList.add("dot");
   dotsDiv.appendChild(dot);
   
   if(i===slideIndex ){
   dot.classList.add('dot_selected');}
}

function chargeSlide(){

	document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[slideIndex].image}`;
	document.querySelector("#banner p").innerHTML = slides[slideIndex].tagLine;

	for (let i = 0; i < dots.length; i++){
		if(i === slideIndex){
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	}
}





 

 