var seed = document.getElementById("seed");
var width = seed.offsetWidth;
// number of buttons to create for detected width
var squaresToCreate = Math.floor(width / 22);
var squareTemplate = document.getElementById("square");

function appendRow(containerId, numberOfSquares, rowCount) {
	var rowCount = rowCount || 1;
	var count = rowCount * numberOfSquares - numberOfSquares;
	var button = squareTemplate.content;
	var appended = [];
	var container = document.createElement("div");
	while (count++ < numberOfSquares * rowCount) {
		clone = document.importNode(button, true);
		var buttonElement = clone.querySelector("button");
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

var prev = appendRow("seed", squaresToCreate);
var intervalId;
document.addEventListener("keypress", function(e) {
	e.preventDefault();
	if (e.keyCode != 13) {
		return false;
	}
	if (intervalId != undefined) {
		clearInterval(intervalId);
		intervalId = undefined;
		return false;
	}
	intervalId = setInterval(function() {
		var row = appendRow("result", squaresToCreate);
		var begin;
		var end;
		for (var i = 0; i < row.length; i++) {
			if (i < 1) {
				begin = i;
				end = i + 2;
			} else {
				begin = i - 1;
				end = begin + 3;
			}
			var slice = prev.slice(begin, end);
			var bits = "";
			for (var j = 0; j < slice.length; j++) {
				if (slice[j].classList.contains("on")) {
					bits += "1";
				} else {
					bits += "0";
				}
			}
			var val = parseInt(bits, 2);
			if (val > 0 && val < 5) {
				row[i].className = "on";
			}
		}
		prev = row;
	}, 200);
	return false;
});

