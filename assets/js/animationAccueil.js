var containe = [document.getElementById('maquettePeinture'),document.getElementById('horizontalScroll')]
var firstsec = document.getElementById('fond');
var four = document.getElementById('horizontalScroll');
var three = document.getElementById('rutur');
/*var horizontal= document.querySelector(".horizontal-section")
horizontal.style.background="linear-gradient(#ffffff,#ffffff,#ffffff, #ffffff)"*/
/*if(parseInt(window.location.hash.charAt(1)) >= 1){
	window.location.replace("")
}*/






window.onload = function(){

	
	
	let page = 0;
	let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
				document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	window.onresize = function(){
		//window.location.replace("")
	}			
	let done = 8  //Math.round(limit/vh)-1;
	let clock = 0;
	var elementWrapper = document.querySelector(".element-wrapper")
	

	function animationHorizontal(position,position2){
	
		elementWrapper.children[position].classList.add("animeHorizon")
		elementWrapper.children[position].children[1].classList.add("animeHorizon")
		setTimeout(() => {
	
			elementWrapper.children[position].children[position2].style.opacity="1"
			elementWrapper.children[position].children[1].classList.add("close")
		}, 1200);
	}

	
		
 
	function scrollWindow(){ window.onwheel = function () {

		

		if(clock == 0){
	  	clock = 1;
	  
	  	let pos = event.deltaY;
	  	let scroll=0;  
	  
		  let go = (event.deltaY < 0 ) ? -1 : +1;
		  var j = window.location.hash.charAt(1)
		
		  if(window.location.hash == "#NaN" || window.location.hash == "" ){
			  page = page + go
		  }
		  else{
			page = parseInt(j)+go
		  }
		 
		  //page = page + go;
		if(page < 0 )page = 0;
		if(page > done) page = done;
		
	
	
		window.location.hash = page
		

		
		var temps = 1500
		var time = 1000

	


		if(page <= 2 && event.deltaY < 0 ){
		
		
				document.querySelectorAll(".element").forEach(element => {
		
					element.classList.remove("animeHorizon")
					element.children[1].classList.remove("animeHorizon")
					element.children[1].classList.remove("close")
					
					setTimeout(() => {
						element.children[0].style.opacity="0"
					}, 800);
				});
		
		
		}

		if(page == 3 && event.deltaY > 0 ){
			
		 	animationHorizontal(1,0)

			setTimeout(() => {
				animationHorizontal(2,0)
			}, 800);
		}
	
	
	
		if(page >= 4 && page < 7 || page == 3 && event.deltaY < 0 ){
			temps = 800
			time = 800
			

			switch(true){

				
				case page == 4 : 
				setTimeout(() => {
					animationHorizontal(4,0)
				}, 800);
				
				animationHorizontal(3,0)
				break;
				case page == 5 : 
				setTimeout(() => {
					animationHorizontal(6,0)
				}, 800);
			
				animationHorizontal(5,0)
				break
			}
		} 

		if(page == 6  && event.deltaY < 0){
			temps = 1500
			time = 1000
		}
		
		$('html, body').animate({
			scrollTop: vh*page
	  	},{duration:temps});
		setTimeout(function(){clock = 0}, time);
	
			}
		}	
	}


 if(window.location.hash == "" || window.location.hash == "#0" ){
	 setTimeout(() => {
		scrollWindow()
	 }, 4500);
 }else{
	scrollWindow()
 }
	
	
/*-------------------------------------------*/
	
	function animationDecompte(next,prev,content){
	
		prev.textContent = content
		
		next.animate([
		// keyframes
			{ transform: 'translateY(-100%)'},
			{ transform: 'translateY(0)'}
			
		],{
			// timing options
			duration:180,
			easing: "ease-in-out",
			
		});
	
		prev.animate([
			// keyframes
			{ transform: 'translateY(-100%)'},
			{ transform: 'translateY(0%)' }
		],{
			// timing options
			duration:180,
			easing: "ease-in-out"
		});
	
		setTimeout(() => {
			next.textContent = content
		}, 180);
	}
	
	var nombre = document.querySelector(".nombreNext")
	var number = document.querySelector(".nombrePrev")
	var liens = document.querySelectorAll(".lien")
	var motNext = document.querySelector(".motNext")
	var motPrev = document.querySelector(".motPrev")
	var delay2 
	
	liens.forEach(element => {
	
		element.onmouseover = function(){
			
			clearTimeout(delay2)
			var delay = setTimeout(function(){animationDecompte(motNext, motPrev,element.textContent.toUpperCase())
			animationDecompte(nombre, number,element.getAttribute("data-id"))},180)
	
			element.onmouseout = function(){
				clearTimeout(delay)
				delay2 = setTimeout(function(){animationDecompte(motNext,motPrev,"AGENCE")
				animationDecompte(nombre, number,"0")},180)
			}
		}
	})
	
	var windowWidth = window.innerWidth;
	var horLength = document.querySelector(".element-wrapper").scrollWidth;
	var distFromTop = document.querySelector(".horizontal-section").offsetTop;
	var scrollDistance = distFromTop + horLength - windowWidth;
	var secondsec = document.getElementById('maquettePeinture');
	document.querySelector(".horizontal-section").style.height = 400+ "vmin";
	var barrePenche = document.querySelectorAll(".barrePenche")
	var imagePath = document.querySelector("#imagePath")
	var animePath = document.querySelector("#animePath")
	var path = document.querySelector("path")
	var texteMaquette = document.querySelector("#texteMaquette")
	path.style.stroke="none"

	document.onscroll = function(){
		var x = window.pageYOffset;
	
		if (x == secondsec.offsetTop){
			path.style.stroke="white"
			animePath.className.baseVal="animePath"
			imagePath.className="imagePath"
		//texteMaquette.className = "position-absolute text-white texteMaquette"
		}
	
		var scrollTop = window.pageYOffset;
	
	  	if (scrollTop >= distFromTop && scrollTop <= scrollDistance+90) {
			console.log("test")
		document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
		
		}
		
	}
	
	var premiereSection = document.querySelector("#premiereSection")
	var fond = document.querySelector("#fond")
	var carreBlanc = document.querySelector("#carreBlanc")
	var premiereSectionDroite = document.querySelectorAll('.premiereSectionDroite')
	var animeOpac = document.querySelectorAll(".animeOpac")
	var titreChargement = document.querySelector(".titreChargement")
	var nav = document.querySelector(".navPc")
	var animeOpacBas = document.querySelectorAll(".animeOpacBas")
	
	titreChargement.animate([
		// keyframes
			{opacity:1,transform: 'translateY(0%)'},
			{opacity:0,transform: 'translateY(-125%)'}
			
		],{
			// timing options
			delay:1000,
			duration:1000,
			fill: "forwards"
		});

	premiereSection.animate([
		// keyframes
			
			{ opacity: 1},
			{ opacity: 0}
			
		],{
			// timing options
			delay:1000,
			duration:1000,
			easing: "ease-in-out",
			fill: "forwards"
		});

  	fond.animate([
		// keyframes
		{backgroundSize:"150% 170%"},
		{backgroundSize:"110% 130%"}
			
		],{
		// timing options
		duration:800,
		delay:1000,
		easing: "ease-in-out",
		fill: "forwards"
	});
	
	carreBlanc.animate([
			// keyframes
		{width: "115vmin"},
		{width: "0%"}
		],{
			duration:800,
			delay:1900,
			easing: "ease-in-out",
			fill: "forwards"
		});

	premiereSectionDroite.forEach(element => {
		element.animate([
			// keyframes
			{ transform: 'translateX(100%)'},
			{ transform: 'translateX(0)'}
			],{
				// timing options
				duration:800,
				delay:2610,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});

	var prums = document.querySelector(".prums")
	prums.animate([
		// keyframes
		{ opacity: '1'},
		{ opacity: '0'}
		],{
		// timing options
		duration:1000,
		delay:3200,
		easing: "ease-in-out",
		fill:"forwards"
	});

		
	var seconds = document.querySelector(".seconds")
				
	seconds.animate([
		// keyframes
		{ opacity: '0'},
		{ opacity: '1'}
		],{
		// timing options
		duration:1000,
		delay:3200,
		easing: "ease-in-out",
		fill:"forwards"
	});

	/* APPARITION DIAGONALE */

	animeOpac.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '0',transform: 'translate(5%, -5%)'},
			{ opacity: '1',transform: 'translate(0 , 0)'}
			],{
				// timing options
				duration:700,
				delay:4000,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});
		
	nav.animate([
	// keyframes
		{ opacity: '0',transform: 'translate(-5%, -5%)'},
		{ opacity: '1',transform: 'translate(0 , 0)'}
	],{
		// timing options
		duration:700,
		delay:4000,
		easing: "ease-in-out",
		fill:"forwards"
	});

	animeOpacBas.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '0',transform: 'translateY(20%)'},
			{ opacity: '1',transform: 'translateY(0)'}
			],{
				// timing options
				duration:700,
				delay:4000,
				easing: "ease-in-out",
				fill:"forwards"
			});
	});
		
	setTimeout(() => {
		premiereSection.className="d-none"
	}, 4200);

	var h = 0
	document.querySelector('.burger').addEventListener('click', function() {
		document.querySelector('#menuBurgerDesktop').style.zIndex = "2"
		this.classList.toggle('open');
		document.querySelector('#burgerSectionGauche').classList.toggle('open');
		document.querySelector('#burgerSectionDroite').classList.toggle('open');

		var unit = document.querySelectorAll(".unit")
		unit.forEach(element => {
			element.classList.toggle('apparition');
		});
		
		if(h%2 == 0){
			window.onwheel = null
		}else{
			setTimeout(() => {
				document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
			}, 1000);
			
			scrollWindow()
		}
	
		h++	
	})

	var reseauxAccueil = document.querySelectorAll(".reseauAccueil")
var lienReseau = document.querySelectorAll(".lienReseau")

lienReseau.forEach(element => {

	element.onmousemove = function(e){
		var left = e.movementX*5
		var top = e.movementY*5
		element.children[0].style.transform = "translate3d("+left+"px,"+top+"px,0)"
		console.log("ok")
	}

	element.onmouseout = function(){
		element.children[0].style.transform = "matrix(1,0,0,1,0,0)"
	}
});


var $body = $('body'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');

function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {
	
	var sxPos = (cx / $body.width()*100 - 50)*2 ;
	var syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -400",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -200",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})

initTilt();

var gauche = document.querySelector("#gauche")
var classElement = ["precedent","vien","vien1","suivant"]
var tabeElement = ["#firstC","#secondC","#thirdC","#fourC"]
var droite = document.querySelector("#prev")
var i = 0
var titreProjet = document.querySelectorAll(".titreProjet")
var ligne = document.querySelectorAll(".ligne")
var apparitionProjetO = document.querySelectorAll(".apparitionProjetO")

function slideDroite(){

	ligne.forEach(element => {
		element.animate([
			// keyframes
			{ width: '100%' },
			{ width: '0%' },
		  ], {
			// timing options
			duration: 200,
			fill:"forwards"
		 });
	});

	apparitionProjetO.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '1'},
			{ opacity: '0' },
		  ], {
			// timing options
			duration: 200,
			fill:"forwards"
		 });
	});

titreProjet.forEach(element => {
	o = element.animate([
		// keyframes
		{ transform: 'translateY(0px)' },
		{ transform: 'translateY(180px)' },
	  ], {
		// timing options
		duration: 200,
		
		fill:"forwards"
	 });
});

	for(var p = 0; p < tabeElement.length; p++){
		for(var y = 0; y < classElement.length-1; y++){
			document.querySelector(tabeElement[p]).classList.remove(classElement[y])
		}
	}

	// Si ajout augmenter le 2
	if(i > 2){
		document.querySelector(tabeElement[i]).classList.add("suivant")
		i = 0
		document.querySelector(tabeElement[i]).classList.add("precedent")
	}

	else{

		document.querySelector(tabeElement[i]).classList.add("suivant")
		document.querySelector(tabeElement[i+1]).classList.add("precedent")
		i++
	}

	droite.disabled= true

	setTimeout(() => {
		droite.disabled = false
		
		ligne.forEach(element => {
			element.animate([
				// keyframes
				{ width: '0%' },
				{ width: '100%' },
			  ], {
				// timing options
				duration: 600,
				fill:"forwards",
				
			 });
		});

		apparitionProjetO.forEach(element => {
			element.animate([
				// keyframes
				{ opacity: '0'},
				{ opacity: '1' },
			  ], {
				// timing options
				duration: 600,
				delay:300,
				fill:"forwards"
			 });
		});
		
		titreProjet.forEach(element => {
			o = element.animate([
				// keyframes
				{ transform: 'translateY(180px)' },
				{ transform: 'translateY(0px)' },
			  ], {
				// timing options
				duration: 300,
				delay:1000,
				fill:"forwards"
			 });
		});

	}, 1000);
}

gauche.onclick = function slideGauche(){

	ligne.forEach(element => {
		element.animate([
			// keyframes
			{ width: '100%' },
			{ width: '0%' },
		  ], {
			// timing options
			duration: 200,
			fill:"forwards"
		 });
	});

	apparitionProjetO.forEach(element => {
		element.animate([
			// keyframes
			{ opacity: '1'},
			{ opacity: '0' },
		  ], {
			// timing options
			duration: 200,
			delay:300,
			fill:"forwards"
		 });
	});

titreProjet.forEach(element => {
	o = element.animate([
		// keyframes
		{ transform: 'translateY(0px)' },
		{ transform: 'translateY(180px)' },
	  ], {
		// timing options
		duration: 200,
		
		fill:"forwards"
	 });
});


		
	
	clearInterval(interne)
	if(i == 0){

		for(var p = 1; p < tabeElement.length; p++){
			for(var y = 0; y < classElement.length; y++)
			document.querySelector(tabeElement[p]).classList.remove(classElement[y])
		}
	
		// Si ajout de div augmenter le 3 mais aussi i de 1
		document.querySelector(tabeElement[3]).classList.add("vien")
		document.querySelector(tabeElement[0]).classList.add("vien1")
		i = 4
	}
	else{
	
		if(i == 1){
			document.querySelector(tabeElement[0]).classList.remove("vien1")
		}
		document.querySelector(tabeElement[i-1]).classList.add("vien")
		document.querySelector(tabeElement[i]).classList.add("vien1")
		
	}
	i--
	
	
	gauche.disabled= true

		 setTimeout(() => {
				gauche.disabled = false	

				ligne.forEach(element => {
					element.animate([
						// keyframes
						{ width: '0%' },
						{ width: '100%' },
					  ], {
						// timing options
						duration: 600,
						fill:"forwards",
						
					 });
				});

				apparitionProjetO.forEach(element => {
					element.animate([
						// keyframes
						{ opacity: '0'},
						{ opacity: '1' },
					  ], {
						// timing options
						duration: 600,
						fill:"forwards"
					 });
				});
				
				titreProjet.forEach(element => {
					o = element.animate([
						// keyframes
						{ transform: 'translateY(180px)' },
						{ transform: 'translateY(0px)' },
					  ], {
						// timing options
						duration: 300,
						delay:1000,
						fill:"forwards"
					 });
				});


			
			}, 1000);
}

droite.onclick = function(){
	clearInterval(interne)
	slideDroite()}

var interne = setInterval(() => {
 slideDroite()
	gauche.disabled = true
	droite.disabled = true

	setTimeout(() => {
		gauche.disabled = false
	droite.disabled = false
	}, 1000);

	
}, 5000);
}



