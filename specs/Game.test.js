const Game = require("../src/Game")
const Player = require("../src/Player")

describe("Testing all outcomes of the deal function", function(){

    test("See if the deck starts out with 52 cards before dealing", function(){

        const testGame = new Game("John", "Sally")
        expect(deck.length).toBe(52)
    });

    test("See if the player1 starts out with 0 cards before dealing", function(){

        const testGame = new Game("John", "Sally")
        expect(testGame.player1.hand.length).toBe(0)
    });

    test("See if the player2 starts out with 0 cards before dealing", function(){

        const testGame = new Game("John", "Sally")
        expect(testGame.player2.hand.length).toBe(0)
    });


    test("See if deal function deals out all 52 cards (leaving deck length at 0)", function(){
        const testGame = new Game("John","Sally")
        testGame.deal()
        expect(deck.length).toBe(0)
    });

    test("See if player 1 receives half the deck (26 cards)", function(){

        const testGame = new Game("John","Sally");
        testGame.deal();
        expect(testGame.player1.hand.length).toBe(26);
    });

    test("See if player 2 receives half the deck (26 cards)", function(){

        const testGame = new Game("John","Sally");
        testGame.deal();
        expect(testGame.player2.hand.length).toBe(26);
    });

});






