var seed = document.getElementById("seed");
var width = seed.offsetWidth;
// number of buttons to create for detected width
var squaresToCreate = Math.floor(width / 20.6) - 1;
var squareTemplate = document.getElementById("square");

function appendRow(containerId, numberOfSquares, rowCount) {
	var rowCount = rowCount || 1;
	var count = 1;
	var button = squareTemplate.content;
	var appended = [];
	var container = document.createElement("div");
	container.id = containerId + "-row" + rowCount;
	while (count < numberOfSquares) {
		clone = document.importNode(button, true);
		var buttonElement = clone.querySelector("button");
		buttonElement.id = containerId + count++;
		buttonElement.addEventListener("click", function() {
			this.classList.toggle("off");
			this.classList.toggle("on");
		});
		appended.push(clone.firstElementChild);
		container.appendChild(clone);
	}
	document.getElementById(containerId).appendChild(container);
	return appended;
}

appendRow("seed", squaresToCreate);

document.addEventListener("keypress", function(e) {
	e.preventDefault();
	if (e.keyCode != 13) {
		return false;
	}
	var row = appendRow("result", squaresToCreate);
	for (var i = 0; i < row.length; i++) {
		var obj = row[i];

	}
	return false;
});
