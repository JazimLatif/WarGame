const Game = require("../src/Game.js");
const Player = require("../src/Player.js");
player1 = new Player("Jazim")
player2 = new Player("Helena")
let game = new Game(player1,player2);
game.deal();
for(i=0; i<=9; i++){
    //  (game.player1.hand.length || game.player2.hand.length ) != 0)
    game.playRound(); }