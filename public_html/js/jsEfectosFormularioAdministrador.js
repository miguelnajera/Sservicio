

function showScreensAsPerButtons(){
	var optFiltroPrincipal = document.getElementById('filtroPrincipal').value;
	if(optFiltroPrincipal=="yes"){
		document.getElementById("bIndividual").className = "container bShowed";
		document.getElementById("bGrupal").className = "container bHidden";
	}else{
		document.getElementById("bIndividual").className = "container bHidden";	
		document.getElementById("bGrupal").className = "container bShowed";
	}
}