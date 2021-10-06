deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14]

player1Hand = []
player2Hand = []

function dealHand(){
for (i=1; i<= 26; i++){
    const random = Math.floor(Math.random() * deck.length);
    const val = deck.splice(random,1)[0];
    player1Hand.push(val);
    const random2 = Math.floor(Math.random() * deck.length);
    const val2 = deck.splice(random2,1)[0];
    player2Hand.push(val2);
    }}

console.log(deck);
dealHand();
console.log(deck);
console.log(player1Hand);
console.log(player2Hand)
