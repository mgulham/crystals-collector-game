//determine global variables
var userScore = 0; 
var randomNumber = 0; 
var redPoints = 0;
var aquaPoints = 0;
var greenPoints = 0;
var purplePoints= 0;

function gameReset(){ 
redPoints = Math.ceil(Math.random() * 12); //random number from 1-12
aquaPoints = Math.ceil(Math.random() * 12); //random number from 1-12
greenPoints = Math.ceil(Math.random() * 12); //random number from 1-12
purplePoints = Math.ceil(Math.random() * 12); //random number from 1-12
randomNumber = (Math.ceil(Math.random() * 102)) + 18; //random number from 19-120
$("#randomNumber" ).html(`${randomNumber}`);
}

$("#red").on("click", function (){
let redPoints = Math.ceil(Math.random() * 12);

if (redPoints > 0){
    userscore = redPoints + userScore;
    $("#score" ).html(`${userScore}`);
    return
    }
    else {
        return
    }})
