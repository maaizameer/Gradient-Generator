var body = document.getElementById('gradient');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var h3 = document.querySelector('h3');

function setGradient(){
	body.style.background = 'linear-gradient(to right,' 
		+ color1.value 
		+',' 
		+ color2.value 
		+ ')'

	h3.textContent = body.style.background + ';';	
}

setGradient();

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

