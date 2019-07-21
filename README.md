# crystals-collector-game
A Java Number Guess Game 

This website is a game that is powerd by html/java/jquery/css.

 The object of the game is to tally your score until your reach a randomly generated number. If you match said number, you win. If you go over, you lose. 

We start the game by having a random number generated between 19 and 120. The random number is then pushed to the html. Your score is set to 0. If the game has been completed (win or loss), your score is also reset to 0. 

There are 4 crystals, which are the game's operators. Each crystal holds the value it is randomly given at the beginning of each round. Every time the game is started or reset (by a refresh, win, or loss),the values of these 4 crystals change again randomly from a value between 1 and 12. 

Your score is updated based on what crystal you click. Each click adds the respective value of the crystal holding it. Your score is tallied until you either match the random number or pass it. 

If you match the random number, a win is added to your win count and the game is reset. If you pass the random number, a loss is added to your loss count and the game is reset. You will be alerted if you won or loss based on the respective event. 


