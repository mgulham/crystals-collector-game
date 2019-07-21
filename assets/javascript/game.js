//determine all numbers that are being kept tracked of as variables
var userScore = 0; 
var randomNumber = 0; 
var redPoints = 0;
var aquaPoints = 0;
var greenPoints = 0;
var purplePoints= 0;
var wins = 0;
var losses = 0;

function gameReset(){ //defining function that resets the game and all parameters that need to change with it
redPoints = Math.ceil(Math.random() * 12); //random number from 1-12
aquaPoints = Math.ceil(Math.random() * 12); //random number from 1-12
greenPoints = Math.ceil(Math.random() * 12); //random number from 1-12
purplePoints = Math.ceil(Math.random() * 12); //random number from 1-12
randomNumber = (Math.ceil(Math.random() * 102)) + 18; //random number from 19-120
$("#randomNumber" ).html(`${randomNumber}`);//random number is to reach is chosen at game start
$("#score").html("Your Total Score Is: 0"); //Score html is reset at the beginning of each game
userScore = 0; 
}

//Defined 4 functions that add points based on which color crystal is clicked
    function addRedPoints(){
    userScore = userScore + redPoints; //adds points to your score based on random number generated for red
    $("#score").html(`Your Total Score Is: ${userScore}`)//pushes updated score to html
//if statement that alerts you if you win or lose and adds to win loss tally. Then game is reset 
        if (userScore == randomNumber){
            alert("You won!");                
            wins++;
            $("#wins").html(`Wins: ${wins}`)
            gameReset(); 
        }
        else if (userScore > randomNumber){
            alert("You Lost!");
            losses++
            $("#losses").html(`Losses: ${losses}`)
            gameReset();
        }
        else {
    
        }
    };
    function addPurplePoints(){
    userScore = userScore + purplePoints;
    $("#score").html(`Your Total Score Is: ${userScore}`)
        if (userScore == randomNumber){
            alert("You won!");
            wins++;
            $("#wins").html(`Wins: ${wins}`)        
            gameReset();
        }
        else if (userScore > randomNumber){
            alert("You Lost!");
            losses++
            $("#losses").html(`Losses: ${losses}`)        
            gameReset();
        }
        else {
        }
    };
        
    function addAquaPoints(){
        userScore = userScore + aquaPoints;
        $("#score").html(`Your Total Score Is: ${userScore}`)
        if (userScore == randomNumber){
            alert("You won!");
            wins++;
            $("#wins").html(`Wins: ${wins}`)
            gameReset();
        }
        else if (userScore > randomNumber){
            alert("You Lost!");
            losses++
            $("#losses").html(`Losses: ${losses}`)
            gameReset();        
        }
        else {
            
        }
    };
    function addGreenPoints(){
        userScore = userScore + greenPoints;
        $("#score").html(`Your Total Score Is: ${userScore}`)
        if (userScore == randomNumber){
            alert("You won!");
            wins++;
            $("#wins").html(`Wins: ${wins}`)
            gameReset();
            }
        else if (userScore > randomNumber){
            alert("You Lost!");
            losses++
            $("#losses").html(`Losses: ${losses}`)
            gameReset();
        }
        else {
                
        }
    };    

//Added on click functions for each color gem             
$("#red").click(addRedPoints); 
$("#purple").click(addPurplePoints);
$("#aqua").click(addAquaPoints);
$("#green").click(addGreenPoints);
        
gameReset(); // This function is called first to reset the game at start