const Player = require("./Player.js")

const Game = function(player1,player2){
    this.player1= Player.player1
    this.player2= Player.player2
}

deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14]

player1Hand.Player = []
player2Hand.Player = []

Game.prototype.deal = function(){
    for (i=1; i<= 26; i++){
        const random = Math.floor(Math.random() * deck.length);
        const val = deck.splice(random,1)[0];
        player1Hand.push(val)
        const random2 = Math.floor(Math.random() * deck.length);
        const val2 = deck.splice(random2,1)[0];
        player2Hand.push(val2)
        }}



//if cards have same value go to war mode
function war() {
    //if cards still have the same value, continue round and draw 4 extra cards
    let i = 1;
    while(player1.hand[i] == player2.hand[i]) {
        console.log("It's a draw.. The war continues!");
        i += 4;
        //increase index of array and shift/push at the end
    }
    if(player1.hand[i]>player2.hand[i]){
        console.log("Player 1 wins the war!");

        player1.win(i, player1.hand, player2.hand);
        player2.lose(i, player2.hand, player1.hand);
        
        console.log("Player 1 number of cards: " + player1.hand.length());
        console.log("Player 2 number of cards: " + player2.hand.length());

    } else if (player2.hand[i]>player1.hand[i]) {
        console.log("Player 2 wins the war!");

        player2.win(i, player2.hand, player1.hand);
        player1.lose(i, player1.hand, player2.hand);
        
        console.log("Player 1 number of cards: " + player1.hand.length());
        console.log("Player 2 number of cards: " + player2.hand.length());
    }
}

module.exports = Game




