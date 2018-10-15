//Onglet Refresh
function refresh() {
	document.getElementById("contentframe").style.visibility = "hidden";
	document.getElementById("gen1_1").style.visibility = "hidden";
	document.getElementById("gen2_1").style.visibility = "hidden";
	document.getElementById("gen3_1").style.visibility = "hidden";

}

//Onglet Génération 1
function gen1() {
	document.getElementById("contentframe").style.visibility = "hidden";
	document.getElementById("gen1_1").style.visibility = "visible";
	document.getElementById("gen2_1").style.visibility = "hidden";
	document.getElementById("gen3_1").style.visibility = "hidden";

}

//Onglet Génération 2
function gen2() {
	document.getElementById("contentframe").style.visibility = "hidden"; 
	document.getElementById("gen1_1").style.visibility = "hidden";
	document.getElementById("gen2_1").style.visibility = "visible";
	document.getElementById("gen3_1").style.visibility = "hidden";
}

//Onglet Génération 3
function gen3() {
	document.getElementById("contentframe").style.visibility = "hidden";
	document.getElementById("gen1_1").style.visibility = "hidden";
	document.getElementById("gen2_1").style.visibility = "hidden";
	document.getElementById("gen3_1").style.visibility = "visible";

}

//Frame HTML implémentée
function ContentFrame(page) {
	document.getElementById("contentframe").style.visibility = "visible";
	document.getElementById("contentframe").src = page;

}
