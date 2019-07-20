//determine global variables
var userScore = 0; 
var randomNumber = 0; 
var redPoints = 0;
var aquaPoints = 0;
var greenPoints = 0;
var purplePoints= 0;
var wins = 0;
var losses = 0;

function gameReset(){ 
redPoints = Math.ceil(Math.random() * 12); //random number from 1-12
aquaPoints = Math.ceil(Math.random() * 12); //random number from 1-12
greenPoints = Math.ceil(Math.random() * 12); //random number from 1-12
purplePoints = Math.ceil(Math.random() * 12); //random number from 1-12
randomNumber = (Math.ceil(Math.random() * 102)) + 18; //random number from 19-120
$("#randomNumber" ).html(`${randomNumber}`);
$("#score").html("Your Total Score Is: 0");
userScore = 0;
}


function addPoints(){
userScore = userScore + redPoints;
$("#score").html(`Your Total Score Is: ${userScore}`)
if (userScore == randomNumber){
    alert("You won!");
    gameReset();
    wins++;
    $("#wins").html(`Wins: ${wins}`)
}
else if (userScore > randomNumber){
    alert("You Lost!");
    gameReset();
    losses++
    $("#losses").html(`Losses: ${losses}`)
}
};

$("#red").click(addPoints)


gameReset();