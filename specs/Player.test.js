const Game = require("../src/Game")
const Player = require("../src/Player")

describe("Testing win in game", function(){
    test("Does player 1 wining increase the size of their deck by 1",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(winningPlayer.length).toBe(7) 
        });
    test("Does player 1 wining size the size of player2 deck by 1",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(losingPlayer.length).toBe(5) 
        });
    test("Does player 1 wining, bring their 2nd card to the top",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(winningPlayer[0]).toBe(4) 
        });

    test("Does player 1 wining, bring player 2's 2nd card to the top",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(losingPlayer[0]).toBe(3) 
        });
    test("Does player 1 wining, bring player 2's first card to the end of their deck",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(winningPlayer[6]).toBe(2) 
        console.log()
        });
    test("Does player 1 wining, bring player 2's first card to near the end of their deck",function(){
        const testPlayer = new Player("John")
        testPlayer.win(1,winningPlayer=[3,4,5,6,7,8],losingPlayer=[2,3,4,5,6,7]);
        expect(winningPlayer[5]).toBe(3) 
        });
})
