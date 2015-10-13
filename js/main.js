$(document).ready(function() {

// * (variable) deckOfCards:    a single deck that represents the working deck
// * (variable) deckIsShuffled: a bool describing if the deck is shuffled or 
// *                            sorted
// *
// * (function) shuffle:          shuffle (or re-shuffle) the current deckOfCards
// * (function) sort:             sort the current deckOfCards
// * (function) pickRandom:       pick a random card from the deckOfCards - only 
// *                              useful when the deck is sorted, since you can 
// *                              just pop off of the top of a shuffled deck!
// * (function) dealDeck:         returns a full deck of cards, sorted
// * (function) resetDeckOfCards: resets the deckOfCards to a full deck, sorted
// *
// */

function isFunction(functionToCheck) {
   var getType = {};
   return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

// create globally accessible variables
var deckOfCards,
    deckIsShuffled,
    shuffle,
    sort,
    pickRandom,
    dealDeck,
    resetDeckOfCards,
    _ = _ || undefined;


  // always load lodash for its methods "shuffle", "sortBy" and "sample" 
  // (pick random)
  // shuffle: https://lodash.com/docs#shuffle
  // sortBy:  https://lodash.com/docs#sortBy
  // sample:  https://lodash.com/docs#sample
  // remove:  https://lodash.com/docs#remove
  
  var cards = [
    "dA","dK","dQ","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
    "cA","cK","cQ","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
    "hA","hK","hQ","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
    "sA","sK","sQ","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"
  ]; // jW, jR, jB

  var cardRank = {
  	sA : 52, hA : 51, dA : 50, cA : 49, 
	sK : 48, hK : 47, dK : 46, cK : 45,
	sQ : 44, hQ : 43, dQ : 42, cQ : 41,
	sJ : 40, hJ : 39, dJ : 38, cJ : 37,
	s10 : 36, h10 : 35, d10 : 34, c10 : 33,
	s09 : 32, h09 : 31, d09 : 30, c09 : 29,
	s08 : 28, h08 : 27, d08 : 26, c08 : 25,
	s07 : 24, h07 : 23, d07 : 22, c07 : 21,
	s06 : 20, h06 : 19, d06 : 18, c06 : 17,
	s05 : 16, h05 : 15, d05 : 14, c05 : 13,
	s04 : 12, h04 : 11, d04 : 10, c04 : 9,
	s03 : 8, h03 : 7, d03 : 6, c03 : 5,
	s02 : 4, h02 : 3, d02 : 2, c02 : 1
  }


var battle = function() {
	//score()
	//render()
	//next battle logic (more increment points left and right)
}

//if left score is greater than right score, display winner left, else winner right.

//score function last
//score render battle, 

var playerCard = 0;
var compCard = 51;
  console.log(cardRank[cards[leftCard]] > cardRank[cards[rightCard]]);

  var cardValue = function(card) {
    return cards.indexOf(card);
  };

  dealDeck = function() {
    return cards;
  }

  resetDeckOfCards = function() {
    deckIsShuffled = false;
    return deckOfCards = dealDeck();
  }

  shuffle = function() {
    deckIsShuffled = true;
    return deckOfCards = _.shuffle(deckOfCards);
  };

  sort = function() {
    deckIsShuffled = false;
    return deckOfCards = _.sortBy(deckOfCards, cardValue);
  };

  pickRandom = function() {
    var card = _.sample(deckOfCards);
    deckOfCards = _.remove(deckOfCards, function(c) { return c !== card; });
    return card;
  };

  resetDeckOfCards();


//var cardValue = function(card) {
  //  return cards.indexOf(card);
  //};
	


//	$('.b1').click(function () {
//    	alert('Shuffle Button clicked');
//	});

$('.b1').click(shuffle);

//	$('.b2').click(function () {
//    	alert('Battle Button clicked');
//	});

//	$('.b3').click(function () {
//    	alert('Deal Button clicked');
//	});

// });



//function compare(a, b) {
//  if (a is less than b by some ordering criterion) {
//    return -1;
//  }
//  if (a is greater than b by the ordering criterion) {
//    return 1;
//  }
//  // a must be equal to b
//  return 0;

});