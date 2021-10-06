// const Player = require("./Player.js")

require("../Player.js")
require("../Card.js")
const Game = function(player1,player2){
    this.player1= Player.player1
    this.player2= Player.player2
}

deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14]

player1Hand.Player = []
player2Hand.Player = []

Game.prototype.deal = function(){
    for (i=1; i<= 52; i++){
        const random = Math.floor(Math.random() * deck.length);
        const val = deck.splice(random,1)[0];
        player1Hand.push(val)
        const random2 = Math.floor(Math.random() * deck.length);
        const val2 = deck.splice(random2,1)[0];
        player2Hand.push(val2)
        }
    for(i=1;i<=26;i++){
        player1Hand.pop()
        player2Hand.pop()
    }
}




// Game.prototype.turn = function




// module.exports = Game


