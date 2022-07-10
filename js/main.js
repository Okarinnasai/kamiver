const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}

function redirect()
{
   
    window.location.href="productos.html";
}

document.addEventListener('DOMContentLoaded', () => {
	const elementoCarousel = document.querySelectorAll ('.carousel');
	M.Carousel.init(elementoCarousel, {
		duration: 150,
		dist: -80,
		shift: 5,
		padding: 5,
		numVisible: 3,
		indicators: true,
		noWrap: false,
	});
	
	//version 2.0 de autoplay :v
	var autoplay = true;
	setInterval(()=>{
		if(autoplay == true){
			M.Carousel.getInstance(elementoCarousel[0]).next();
		}
		
	 },2000);

	 let id_Carousel = document.getElementById('foto-p');
	 
	 id_Carousel.addEventListener("mouseover", function(event){
		autoplay=false;
	 });

	 id_Carousel.addEventListener("mouseout", function(event){
		autoplay=true;
	 })


});
	


	