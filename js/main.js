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
		
	 },4000);

	 let id_Carousel = document.getElementById('foto-p');
	 
	 id_Carousel.addEventListener("mouseover", function(event){
		autoplay=false;
	 });

	 id_Carousel.addEventListener("mouseout", function(event){
		autoplay=true;
	 })

	 const imgLightBox = document.querySelectorAll('.materialboxed');
	 M.Materialbox.init(imgLightBox,{
		inDuration: 400,
		outDuration: 500
	 });
});

let list = document.querySelectorAll('.list');
let itembox = document.querySelectorAll('.itembox');

for(let i = 0; i<list.length; i++){
	list[i].addEventListener('click',function(){
		for(let j=0; j<list.length; j++){
			list[j].classList.remove('active')
		}
		this.classList.add('active');
		let dataFilter = this.getAttribute('data-filter');

		for( let k=0; k<itembox.length; k++){
			itembox[k].classList.remove('active');
			itembox[k].classList.add('hide');

			if(itembox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
				itembox[k].classList.remove('hide');	
				itembox[k].classList.add('active');	
			}
		}
	})
}


	