var numSquares = 6;
var colors = [];
var pickedColor;
var count = 0;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			console.log(this);
			// this.classList.add("selected");
			if(this.textContent === "EASY"){
				numSquares = 3;
			}else if(this.textContent === "MEDIUM"){
				numSquares = 6;
			}else{
				numSquares = 9;
			}
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0; i<squares.length; i++){

		//event listeners
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(pickedColor === clickedColor ){
				msgDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				msgDisplay.textContent = "You took " + (count+1) + " turns!";
				count=0;
			}else{
				count++;
				this.style.opacity="0.5";
				msgDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", reset);

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = (Math.random() * colors.length);
	// console.log(random);
	random = Math.floor(random);
	// console.log(random);
	// console.log(colors[random]);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];

	for(var i=0; i<num; i++){
		// console.log(num);
		// console.log(i);
		arr.push(randomColor());
	}
	// console.log("arr length: " + arr.length);
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// console.log("rgb(" + r + ", " + g + ", " + b + ")");
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors =generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i=0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors =generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i=0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });