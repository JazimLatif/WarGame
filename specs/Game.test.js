const Game = require("../src/Game")
const Player = require("../src/Player")

require("../src/Game")

test("See if deal function deals out all 52 cards (leaving deck length at 0)", function(){
    //Assure
    const testGame = new Game("John","Sally")
    testGame.deal()
    expect(deck.length).toBe(0)
})


test("See if player 1 receives half the deck (26 cards)", function(){
    //Assure
    const testGame = new Game("John","Sally")
    testGame.deal()
    expect(testGame.player1.hand.length).toBe(26)
 })

 test("See if player 1 receives half the deck (26 cards)", function(){
    //Assure
    const testGame = new Game("John","Sally")
    testGame.deal()
    expect(testGame.player2.hand.length).toBe(26)
 })