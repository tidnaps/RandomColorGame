var numSquares = 6;
var colors = generateRandomColor(numSquares);
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)",
// ]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;

 easyButton.addEventListener("click", function(){
	numSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else { 
			squares[i].style.display = "none";}
	}

});

 hardButton.addEventListener("click", function()
{
	numSquares = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		 
			squares[i].style.background = colors[i];		
			squares[i].style.display = "block";
	}


});


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		// get random color and pish into array
		arr.push(randomColor());
		// arr.push(Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256));
	}


	return arr;

}


function randomColor(){
	// pick  red, g and bluefrom 0-255, 
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", "+ b + ")";
}

resetButton.addEventListener("click", function(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		h1.style.background = "steelblue";
	}
})


for (var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add listeners to squares
	squares[i].addEventListener("click", function(){
	// grab color of clicked square
	var clickedColor = this.style.background;
	// check if color is correct and display message
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct";
		resetButton.textContent = "Play Again?";
		// ALL square display shud turnn to clickColor
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		resetButton.addEventListener("click", function(){
			resetButton.textContent = "New Colors";
		})

	} else {
		this.style.background= "#232323";
		messageDisplay.textContent = "Try Again";
	}

	
	});

}