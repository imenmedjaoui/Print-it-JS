const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", function() {
	console.log("précédent")
  });

let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", ()=> {
	console.log("suivant")
  });
// Create Dots
  let dotsDiv=document.querySelector(".dots");
  for ( i = 0; i < slides.length; i++) {
	let dot=document.createElement('span');
	dot.classList.add("dot");
	
	dotsDiv.appendChild(dot);
	let slideIndex=0;
	if(i===slideIndex ){
	 dot.classList.add('dot_selected');}
}
	
