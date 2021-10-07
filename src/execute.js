const Game = require("../src/Game.js");
const Player = require("../src/Player.js");
player1 = new Player("Jazim")
player2 = new Player("Helena")
let game = new Game(player1,player2);
game.deal();
let round = 0
//while((game.player1.hand[0] !== undefined && game.player2.hand[0] !== undefined))
while(game.player1.hand.length >=5 && game.player2.hand.length >=5)
{game.playRound();
console.log("Round: "+round);
round++}
console.log("the game is over")
if(game.player1.hand.length>game.player2.hand.length){
    console.log("Player 1 Wins!")
}
else if(game.player2.hand.length>game.player1.hand.length){
    console.log("Player 2 Wins!")
    
}