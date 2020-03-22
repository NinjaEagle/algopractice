// 950. Reveal Cards In Increasing Order
// https://leetcode.com/problems/reveal-cards-in-increasing-order/

var deckRevealedIncreasing = function(deck) {
    // original way 
    // let newDeck = [],
    // let sorted = deck.sort((a,b) => a > b);
    // sorted.splice(1,2)
    // for (let i of sorted){
    //     console.log (i)
    //     newDeck.push(i)
    // }
    // return newDeck
    deck.sort((a, b) => a - b);
    const newDeck = [];
    while (deck.length) {
//       take end of array and adding it into the front of the newArray
        newDeck.unshift(deck.pop());
//   taking the last number in the new array and rearranging it so it gets pushed in the beginning
        newDeck.unshift(newDeck.pop());
    }
//    since the front of the array has the number we need at the end, we take the first number out and push it at the end of the array
    newDeck.push(newDeck.shift())
    return newDeck;
};