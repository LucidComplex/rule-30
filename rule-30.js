var seed = document.getElementById("seed");
var width = seed.offsetWidth;
// number of buttons to create for detected width
var squaresToCreate = Math.floor(width / 20.6);
var squareTemplate = document.getElementById("square");

function generateFirstRow(numberOfSquares) {
	var count = 1;
	var button = squareTemplate.content;
	while (count < numberOfSquares) {
		clone = document.importNode(button, true);
		var buttonElement = clone.querySelector("button");
		buttonElement.id = count++;
		buttonElement.addEventListener("click", function() {
			this.classList.toggle("off")
			this.classList.toggle("on")
		});
		seed.appendChild(clone);
	}
}
generateFirstRow(squaresToCreate);

