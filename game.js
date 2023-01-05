var userInput = "";
var compInput = "";
var compOptions = ["Rock", "Paper", "Scissors"];

var userScore = 0;
var compScore = 0;
var ties = 0;

var userRock = 0;
var userPaper = 0;
var userScissors = 0;

var compRock = 0;
var compPaper = 0;
var compScissors = 0;

var playCount = 0;

function playerName() {
	var user = prompt("Please enter your name");

	if (user != null) {
  		document.getElementById("user").innerHTML = "Hi, " + user + "! Welcome to Rock, Paper, Scissors!";
	}
}

playerName();

function userChoice() {
	if(document.getElementById('Rock').checked == true) {
		userInput = "Rock";
	}
	else if(document.getElementById('Paper').checked == true) {
		userInput = "Paper";
	}
	else if(document.getElementById('Scissors').checked == true) {
		userInput = "Scissors";
	}
	else{
		alert("Please select an option.");
		return 0;
	}
	return userInput;
}

function play() {
	compInput = compOptions[Math.floor(Math.random()*3)];
	return compInput;
}

compare(userInput, compInput);

function compare(userInput, compInput) {
	document.getElementById("compAnswer").innerHTML = compInput;
	playCount++;
	
	if(userInput == compInput) {
		ties++;
		document.getElementById("results").innerHTML += " Tie ";
	}
	else if(userInput == "Rock" && compInput == "Scissors") {
		userRock++;
		compScissors++;
		userScore++;
		document.getElementById("results").innerHTML += " Win ";
		}
	else if (userInput == "Rock" && compInput == "Paper") {
		userRock++;
		compPaper++;
		compScore++;
		document.getElementById("results").innerHTML += " Lose ";
	}
	else if(userInput == "Paper" && compInput == "Rock") {
		userPaper++;
		compRock++;
		userScore++;
		document.getElementById("results").innerHTML += " Win ";
	}
	else if(userInput == "Paper" && compInput == "Scissors") {
		userPaper++;
		compScissors++;
		compScore++;
		document.getElementById("results").innerHTML += " Lose ";
	}
	else if(userInput == "Scissors" && compInput == "Paper") {
		userScissors++;
		compPaper++;
		userScore++;
		document.getElementById("results").innerHTML += " Win ";
	}
	else {
		userScissors++;
		compRock++;
		compScore++;
		document.getElementById("results").innerHTML += " Lose ";
	}

	document.getElementById("playcount").innerHTML = playCount;

	document.getElementById("playerscore").innerHTML = userScore;
	document.getElementById("compscore").innerHTML = compScore;

	document.getElementById("userrock").innerHTML = userRock;
	document.getElementById("userpaper").innerHTML = userPaper;
	document.getElementById("userscissors").innerHTML = userScissors;

	document.getElementById("comprock").innerHTML = compRock;
	document.getElementById("comppaper").innerHTML = compPaper;
	document.getElementById("compscissors").innerHTML = compScissors;
}