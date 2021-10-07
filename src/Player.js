const Player = function(playerName){
      this.name = playerName;
      this.hand = [],
      isWinner = null;
}

Player.prototype.win = function(numCardsWon, winningPlayerHand, losingPlayerHand) {
      for(i = 0; i < numCardsWon; i++) {
            winningPlayerHand.push(winningPlayerHand.shift());
            winningPlayerHand.push(losingPlayerHand.shift());
      }
}

module.exports = Player;
