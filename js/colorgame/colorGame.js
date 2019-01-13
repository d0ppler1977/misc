let numSquares = 6;
let colors = [];
let pickedColor = " ";

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares = this.textContent === "lett" ? 3 : 6;
			reset();
		});
	}

	for(let i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Korrekt!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Spill på nytt?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Prøv igjen";
			}
		});
	}
	reset();
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = colors[pickColor(colors.length)];
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if (i < numSquares) squares[i].style.display = "block";
		else squares[i].style.display = "none";
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "Nye farger";
	messageDisplay.textContent = "";
}

function changeColors(color) {
	for (let i = 0; i < squares.length; i ++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomColors(num) {
	const colors = [];
	for (let i = 0; i < num; i++) {
		colors.push("rgb(" + pickColor(256) + ", " + pickColor(256) + ", " + pickColor(256) + ")");
	}
	return colors;
}