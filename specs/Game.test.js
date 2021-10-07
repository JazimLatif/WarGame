const Game = require("../src/Game")
const Player = require("../src/Player")

describe("Testing all outcomes of the deal function", function(){

    test("See if the deck starts out with 52 cards (before dealing)", function(){

        const testGame = new Game("John", "Sally")
        expect(testGame.deck.length).toBe(52)
    });

    test("See if the player1 starts out with 0 cards (before dealing)", function(){

        const testGame = new Game("John", "Sally")
        expect(testGame.player1.hand.length).toBe(0)
    });

    test("See if the player2 starts out with 0 cards (before dealing)", function(){

        const testGame = new Game("John", "Sally")
        expect(testGame.player2.hand.length).toBe(0)
    });


    test("See if deal function deals out all 52 cards (leaving deck length at 0 after dealing)", function(){
        const testGame = new Game("John","Sally")
        testGame.deal()
        expect(testGame.deck.length).toBe(0)
    });

    test("See if player 1 receives half the deck (26 cards after dealing)", function(){

        const testGame = new Game("John","Sally");
        testGame.deal();
        expect(testGame.player1.hand.length).toBe(26);
    });

    test("See if player 2 receives half the deck (26 cards after dealing)", function(){

        const testGame = new Game("John","Sally");
        testGame.deal();
        expect(testGame.player2.hand.length).toBe(26);
    });

});


describe("Testing playRound function in game", function(){

     test("Does playing round compare indexes (using test arrays player 1 should win)",function(){
     const testGame2 = new Game("John","Sally")
     testGame2.playRound();
     expect(testGame2.player1.hand[0]>testGame2.player2.hand[0]).toBe(true)     
     });


    test("Does playing round compare indexes (using test arrays player 2 should lose)",function(){
        const testGame2 = new Game("John","Sally")
        testGame2.playRound();
        expect(testGame2.player2.hand[0]<testGame2.player1.hand[0]).toBe(true) 
    });  

    // test("Does playing round compare indexes (can uncomment this and change the test arrays to a tie)",function(){
    //     const testGame2 = new Game("John","Sally")
    //     testGame2.playRound();
    //     expect(testGame2.player2.hand[0]===testGame2.player1.hand[0]).toBe(true) 
    // });  
    });




// describe("Testing War in game", function(){
//     test("Does calling war compare indexes",function())
//     const testGame3 = new Game("John","Sally")
//     testGame3.war();
//     expect()
// }



