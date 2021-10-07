const Player = require("./Player.js")

const Game = function(){
    this.player1= new Player
    this.player2= new Player
    this.deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14]
    // 2 is the smallest value card, Jack = 11, Queen = 12, King = 13, Ace = 14
}

Game.prototype.deal = function(){
    for (i=1; i<= 26; i++){
        const random = Math.floor(Math.random() * this.deck.length);
        const val = this.deck.splice(random,1)[0];
        this.player1.hand.push(val)
        const random2 = Math.floor(Math.random() * this.deck.length);
        const val2 = this.deck.splice(random2,1)[0];
        this.player2.hand.push(val2)
        }}


Game.prototype.playRound  = function(){
    if (this.player1.hand[0] > this.player2.hand[0]){
        this.player1.win(1, this.player1.hand, this.player2.hand);
    }else if (this.player2.hand[0] > this.player1.hand[0]){
        this.player2.win(1, this.player2.hand, this.player1.hand);
    }else{
        this.war();
    }
}


//if cards have same value go to war mode
Game.prototype.war = function() {
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
        
        console.log("Player 1 number of cards: " + player1.hand.length());
        console.log("Player 2 number of cards: " + player2.hand.length());

    } else if (player2.hand[i]>player1.hand[i]) {
        console.log("Player 2 wins the war!");

        player2.win(i, player2.hand, player1.hand);
        
        console.log("Player 1 number of cards: " + player1.hand.length());
        console.log("Player 2 number of cards: " + player2.hand.length());
    }
}

module.exports = Game;