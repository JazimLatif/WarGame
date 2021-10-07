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

     test("Does playing round compare indexes",function(){
     const testGame2 = new Game("John","Sally")
     testGame2.playRound();
     expect(testGame2.player1.hand[0]>testGame2.player2.hand[0]).toBe(true)     
     });


    test("Does playing round compare indexes",function(){
        const testGame2 = new Game("John","Sally")
        testGame2.playRound();
        expect(testGame2.player2.hand[0]<testGame2.player1.hand[0]).toBe(true) 
    });  

    test("Does playing round compare indexes",function(){
        const testGame2 = new Game("John","Sally")
        testGame2.playRound();
        expect(testGame2.player2.hand[0]===testGame2.player1.hand[0]).toBe(true) 
    });  
    });




// describe("Testing War in game", function(){
//     test("Does calling war compare indexes",function())
//     const testGame3 = new Game("John","Sally")
//     testGame3.war();
//     expect()
// }

describe("Testing win in game", function(){
    test("Does player 1 wining, bring their 2nd card to the top",function(){
    const testPlayer = new Player("John")
    testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
    expect(winningPlayer[0]).toBe(4) 
    })

    test("Does player 1 wining, bring player 2's 2nd card to the top",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(losingPlayer[0]).toBe(3) 
        })
    test("Does player 1 wining, bring player 2's first card to the the end of their deck",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(winningPlayer[6]).toBe(2) 
        })
})


