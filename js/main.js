$(document).ready(function() {

var shuffle;
var battle;
var newDeal;

var deck = [
	{ card: 'Ace of Spades', value: 52 },
	{ card: 'Ace of Hearts', value: 51 },
	{ card: 'Ace of Diamonds', value: 50 },
	{ card: 'Ace of Clubs', value: 49 },
	{ card: 'King of Spades', value: 48 },
	{ card: 'King of Hearts', value: 47 },
	{ card: 'King of Diamonds', value: 46 },
	{ card: 'King of Clubs', value: 45 },
	{ card: 'Queen of Spades', value: 44 },
	{ card: 'Queen of Hearts', value: 43 },
	{ card: 'Queen of Diamonds', value: 42 },
	{ card: 'Queen of Clubs', value: 41 },
	{ card: 'Jack of Spades', value: 40 },
	{ card: 'Jack of Hearts', value: 39 },
	{ card: 'Jack of Diamonds', value: 38 },
	{ card: 'Jack of Clubs', value: 37 },
	{ card: 'Ten of Spades', value: 36 },
	{ card: 'Ten of Hearts', value: 35 },
	{ card: 'Ten of Diamonds', value: 34 },
	{ card: 'Ten of Clubs', value: 33 },
	{ card: 'Nine of Spades', value: 32 },
	{ card: 'Nine of Hearts', value: 31 },
	{ card: 'Nine of Diamonds', value: 30 },
	{ card: 'Nine of Clubs', value: 29 },
	{ card: 'Eight of Spades', value: 28 },
	{ card: 'Eight of Hearts', value: 27 },
	{ card: 'Eight of Diamonds', value: 26 },
	{ card: 'Eight of Clubs', value: 25 },
	{ card: 'Seven of Spades', value: 24 },
	{ card: 'Seven of Hearts', value: 23 },
	{ card: 'Seven of Diamonds', value: 22 },
	{ card: 'Seven of Clubs', value: 21 },
	{ card: 'Six of Spades', value: 20 },
	{ card: 'Six of Hearts', value: 19 },
	{ card: 'Six of Diamonds', value: 18 },
	{ card: 'Six of Clubs', value: 17 },
	{ card: 'Five of Spades', value: 16 },
	{ card: 'Five of Hearts', value: 15 },
	{ card: 'Five of Diamonds', value: 14 },
	{ card: 'Five of Clubs', value: 13 },
	{ card: 'Four of Spades', value: 12 },
	{ card: 'Four of Hearts', value: 11 },
	{ card: 'Four of Diamonds', value: 10 },
	{ card: 'Four of Clubs', value: 09 },
	{ card: 'Three of Spades', value: 08 },
	{ card: 'Three of Hearts', value: 07 },
	{ card: 'Three of Diamonds', value: 06 },
	{ card: 'Three of Clubs', value: 05 },
	{ card: 'Two of Spades', value: 04 },
	{ card: 'Two of Hearts', value: 03 },
	{ card: 'Two of Diamonds', value: 02 },
	{ card: 'Two of Clubs', value: 01 },
]


	$('.b1').click(function () {
    	alert('Shuffle Button clicked');
	});

	$('.b2').click(function () {
    	alert('Battle Button clicked');
	});

	$('.b3').click(function () {
    	alert('Deal Button clicked');
	});

});







function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}