var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");//first input
var color2 = document.querySelector(".color2");//second input
var body = document.getElementById("gradient");
var button = document.getElementById("random"); //button

function changeColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function RandomFunction() {

	var letters = "0123456789ABCDEF";
	var col1 = "#";
	var col2 = "#";
	for (var i = 0; i < 6; i ++) {
		col1 += letters[Math.floor(Math.random() * 16)];
	}
	for (var i = 0; i < 6; i ++) {
		col2 += letters[Math.floor(Math.random() * 16)];
	}
	body.style.background = "linear-gradient(to right, " + col1 + ", " + col2 + ")";

	color1.value = col1;
	color2.value = col2;

}

button.addEventListener("click", RandomFunction);

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

