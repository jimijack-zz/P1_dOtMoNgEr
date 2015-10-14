$(document).ready(function() {

// create globally accessible variables
  var playerCard,
      compCard,
      playerScore,
      compScore,
      warOver;

//================
  
  var cards = [
    {name: "sA", rank: 52, image: "cards/card-starter/images/spades/spades-A.svg"},
    {name: "hA", rank: 51, image: "cards/card-starter/images/hearts/hearts-A.svg"},
    {name: "dA", rank: 50, image: "cards/card-starter/images/diamonds/diamonds-A.svg"},
    {name: "cA", rank: 49, image: "cards/card-starter/images/clubs/clubs-A.svg"},
    {name: "sK", rank: 48, image: "cards/card-starter/images/spades/spades-K.svg"},
    {name: "hK", rank: 47, image: "cards/card-starter/images/hearts/hearts-K.svg"},
    {name: "dK", rank: 46, image: "cards/card-starter/images/diamonds/diamonds-K.svg"},
    {name: "cK", rank: 45, image: "cards/card-starter/images/clubs/clubs-K.svg"},
    {name: "sQ", rank: 44, image: "cards/card-starter/images/spades/spades-Q.svg"},
    {name: "hQ", rank: 43, image: "cards/card-starter/images/hearts/hearts-Q.svg"},
    {name: "dQ", rank: 42, image: "cards/card-starter/images/diamonds/diamonds-Q.svg"},
    {name: "cQ", rank: 41, image: "cards/card-starter/images/clubs/clubs-Q.svg"},
    {name: "sJ", rank: 40, image: "cards/card-starter/images/spades/spades-J.svg"},
    {name: "hJ", rank: 39, image: "cards/card-starter/images/hearts/hearts-J.svg"},
    {name: "dJ", rank: 38, image: "cards/card-starter/images/diamonds/diamonds-J.svg"},
    {name: "cJ", rank: 37, image: "cards/card-starter/images/clubs/clubs-J.svg"},
    {name: "s10", rank: 36, image: "cards/card-starter/images/spades/spades-r10.svg"},
    {name: "h10", rank: 35, image: "cards/card-starter/images/hearts/hearts-r10.svg"},
    {name: "d10", rank: 34, image: "cards/card-starter/images/diamonds/diamonds-r10.svg"},
    {name: "c10", rank: 33, image: "cards/card-starter/images/clubs/clubs-r10.svg"},
    {name: "s09", rank: 32, image: "cards/card-starter/images/spades/spades-r09.svg"},
    {name: "h09", rank: 31, image: "cards/card-starter/images/hearts/hearts-r09.svg"},
    {name: "d09", rank: 30, image: "cards/card-starter/images/diamonds/diamonds-r09.svg"},
    {name: "c09", rank: 29, image: "cards/card-starter/images/clubs/clubs-r09.svg"},
    {name: "s08", rank: 28, image: "cards/card-starter/images/spades/spades-r08.svg"},
    {name: "h08", rank: 27, image: "cards/card-starter/images/hearts/hearts-r08.svg"},
    {name: "d08", rank: 26, image: "cards/card-starter/images/diamonds/diamonds-r08.svg"},
    {name: "c08", rank: 25, image: "cards/card-starter/images/clubs/clubs-r08.svg"},
    {name: "s07", rank: 24, image: "cards/card-starter/images/spades/spades-r07.svg"},
    {name: "h07", rank: 23, image: "cards/card-starter/images/hearts/hearts-r07.svg"},
    {name: "d07", rank: 22, image: "cards/card-starter/images/diamonds/diamonds-r07.svg"},
    {name: "c07", rank: 21, image: "cards/card-starter/images/clubs/clubs-r07.svg"},
    {name: "s06", rank: 20, image: "cards/card-starter/images/spades/spades-r06.svg"},
    {name: "h06", rank: 19, image: "cards/card-starter/images/hearts/hearts-r06.svg"},
    {name: "d06", rank: 18, image: "cards/card-starter/images/diamonds/diamonds-r06.svg"},
    {name: "c06", rank: 17, image: "cards/card-starter/images/clubs/clubs-r06.svg"},
    {name: "s05", rank: 16, image: "cards/card-starter/images/spades/spades-r05.svg"},
    {name: "h05", rank: 15, image: "cards/card-starter/images/hearts/hearts-r05.svg"},
    {name: "d05", rank: 14, image: "cards/card-starter/images/diamonds/diamonds-r05.svg"},
    {name: "c05", rank: 13, image: "cards/card-starter/images/clubs/clubs-r05.svg"},
    {name: "s04", rank: 12, image: "cards/card-starter/images/spades/spades-r04.svg"},
    {name: "h04", rank: 11, image: "cards/card-starter/images/hearts/hearts-r04.svg"},
    {name: "d04", rank: 10, image: "cards/card-starter/images/diamonds/diamonds-r04.svg"},
    {name: "c04", rank: 9, image: "cards/card-starter/images/clubs/clubs-r04.svg"},
    {name: "s03", rank: 8, image: "cards/card-starter/images/spades/spades-r03.svg"},
    {name: "h03", rank: 7, image: "cards/card-starter/images/hearts/hearts-r03.svg"},
    {name: "d03", rank: 6, image: "cards/card-starter/images/diamonds/diamonds-r03.svg"},
    {name: "c03", rank: 5, image: "cards/card-starter/images/clubs/clubs-r03.svg"},
    {name: "s02", rank: 4, image: "cards/card-starter/images/spades/spades-r02.svg"},
    {name: "d02", rank: 3, image: "cards/card-starter/images/hearts/hearts-r02.svg"},
    {name: "h02", rank: 2, image: "cards/card-starter/images/diamonds/diamonds-r02.svg"},
    {name: "c02", rank: 1, image: "cards/card-starter/images/clubds/clubs-r02.svg"},
  ];



$(".b1").click(function goToWar() {
  playerCard = compCard = null;
  playerScore = compScore = null;
  warOver = false;
  _.shuffle(cards);
});


$(".b2").click(function battle() {
	if (playerCard = null) {
      playerCard = (cards[0]);
      compCard = (cards[51]);
  } else {
  playerCard += 1;
  compCard += 1;
    } if (playerCard = (cards[25])) {
      warOver = true;
    } else {
      warOver = false;
    }
});

function gameOver() {
  if (warOver = true) && (playerScore > compScore){
    alert("Player1 destroyed you.")
  } else if (warOver = true) && (playerScore < compScore) {
    alert("Comp1 destroyed you.")
  } else {
    warOver = false;
  }
}


//if left score is greater than right score, display winner left, else winner right.

//score function last
//score render battle, 

var playerCard = 0;
var compCard = 51;
 // console.log(cardRank[cards[playerCard]] > cardRank[cards[compCard]]);

  console.log((cards[playerCard]) < (cards[compCard]));

//  var cardValue = function(card) {
//    return cards.indexOf(card);
//  };

//  dealDeck = function() {
//    return cards;
//  }

//  resetDeckOfCards = function() {
//    deckIsShuffled = false;
//    return deckOfCards = dealDeck();
//  }

//  shuffle = function() {
//    deckIsShuffled = true;
//    return deckOfCards = _.shuffle(deckOfCards);
//  };

//  sort = function() {
//    deckIsShuffled = false;
//    return deckOfCards = _.sortBy(deckOfCards, cardValue);
//  };

//  pickRandom = function() {
//    var card = _.sample(deckOfCards);
//    deckOfCards = _.remove(deckOfCards, function(c) { return c !== card; });
//    return card;
//  };

//  resetDeckOfCards();


//var cardValue = function(card) {
  //  return cards.indexOf(card);
  //};
	


//	$('.b1').click(function () {
//    	alert('Shuffle Button clicked');
//	});


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