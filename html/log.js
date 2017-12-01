window.onload = function(){
		//Llamamos a la funcion que nos compruebe si se carga el contexto.
		let contexto = cargaContextoCanvas('log');

		if(contexto){
			contexto.beginPath();
			contexto.fillStyle = "black";	
			contexto.arc(12,10,5,0,Math.PI * 2,false);
			contexto.fill();
			contexto.closePath();

			contexto.beginPath();
			contexto.fillStyle = "black";	
			contexto.arc(12,22,8,Math.PI * 1,0,false);
			contexto.fill();
			contexto.closePath();
		}



document.getElementById("buscar").addEventListener("click",function(){
	
		let parrafo = document.getElementById("search");
		let img = document.getElementById("buscar");
		parrafo.style.display = "block";
		parrafo.focus();
		img.style.display = "none";
});

document.getElementById("search").addEventListener("blur",function(){
	
		let parrafo = document.getElementById("search");
		let img = document.getElementById("buscar");
		parrafo.style.display = "none";
		img.style = "display: block; margin:0 auto;";
});

/*document.getElementById("IrArriba").addEventListener("click",function(){
	window.scroll(0, window.scrollY - window.innerHeight);
});

if(window.scrollY(0)){
	document.getElementById("span").style = "width:100px;";
}*/
function abajo() {
window.scrollBy(0,20); // velocidad abajo
scrolldelay = setTimeout('abajo()',100); // tiempo
}
function subir() {
window.scrollBy(0,-20); // velocidad subir
scrolldelay = setTimeout('subir()',100); // tiempo
}
function stopScroll() {
clearTimeout(scrolldelay);
}

let scroll = function(){
	let abajo = document.getElementById("abajo");
	let arriba = document.getElementById("arriba");
	if(window.scrollY >= 350){
		abajo.style.display = "none";
		arriba.style.display = "block";
	}else if(window.scrollY < 300){
		abajo.style.display = "block";
		arriba.style.display = "none";
	}	
}
onscroll = scroll;
}	
function cargaContextoCanvas(idCanvas){
		var elemento = document.getElementById(idCanvas);
		if(elemento && elemento.getContext){
		var contexto = elemento.getContext('2d');
		if(contexto){
			return contexto;
		}
	}
		return FALSE;
	}

