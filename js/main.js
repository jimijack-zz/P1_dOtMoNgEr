$(document).ready(function() {

// create globally accessible variables
  var playerCard = null,
      compCard = null,
      playerScore,
      compScore,
      warOver;

//================
  
  var cards = [
    {name: "sA", rank: 52, image: "cards/card-starter/images/spades/spades-A.svg"},
    {name: "hA", rank: 52, image: "cards/card-starter/images/hearts/hearts-A.svg"},
    {name: "dA", rank: 52, image: "cards/card-starter/images/diamonds/diamonds-A.svg"},
    {name: "cA", rank: 52, image: "cards/card-starter/images/clubs/clubs-A.svg"},
    {name: "sK", rank: 48, image: "cards/card-starter/images/spades/spades-K.svg"},
    {name: "hK", rank: 48, image: "cards/card-starter/images/hearts/hearts-K.svg"},
    {name: "dK", rank: 48, image: "cards/card-starter/images/diamonds/diamonds-K.svg"},
    {name: "cK", rank: 48, image: "cards/card-starter/images/clubs/clubs-K.svg"},
    {name: "sQ", rank: 44, image: "cards/card-starter/images/spades/spades-Q.svg"},
    {name: "hQ", rank: 44, image: "cards/card-starter/images/hearts/hearts-Q.svg"},
    {name: "dQ", rank: 44, image: "cards/card-starter/images/diamonds/diamonds-Q.svg"},
    {name: "cQ", rank: 44, image: "cards/card-starter/images/clubs/clubs-Q.svg"},
    {name: "sJ", rank: 40, image: "cards/card-starter/images/spades/spades-J.svg"},
    {name: "hJ", rank: 40, image: "cards/card-starter/images/hearts/hearts-J.svg"},
    {name: "dJ", rank: 40, image: "cards/card-starter/images/diamonds/diamonds-J.svg"},
    {name: "cJ", rank: 40, image: "cards/card-starter/images/clubs/clubs-J.svg"},
    {name: "s10", rank: 36, image: "cards/card-starter/images/spades/spades-r10.svg"},
    {name: "h10", rank: 36, image: "cards/card-starter/images/hearts/hearts-r10.svg"},
    {name: "d10", rank: 36, image: "cards/card-starter/images/diamonds/diamonds-r10.svg"},
    {name: "c10", rank: 36, image: "cards/card-starter/images/clubs/clubs-r10.svg"},
    {name: "s09", rank: 32, image: "cards/card-starter/images/spades/spades-r09.svg"},
    {name: "h09", rank: 32, image: "cards/card-starter/images/hearts/hearts-r09.svg"},
    {name: "d09", rank: 32, image: "cards/card-starter/images/diamonds/diamonds-r09.svg"},
    {name: "c09", rank: 32, image: "cards/card-starter/images/clubs/clubs-r09.svg"},
    {name: "s08", rank: 28, image: "cards/card-starter/images/spades/spades-r08.svg"},
    {name: "h08", rank: 28, image: "cards/card-starter/images/hearts/hearts-r08.svg"},
    {name: "d08", rank: 28, image: "cards/card-starter/images/diamonds/diamonds-r08.svg"},
    {name: "c08", rank: 28, image: "cards/card-starter/images/clubs/clubs-r08.svg"},
    {name: "s07", rank: 24, image: "cards/card-starter/images/spades/spades-r07.svg"},
    {name: "h07", rank: 24, image: "cards/card-starter/images/hearts/hearts-r07.svg"},
    {name: "d07", rank: 24, image: "cards/card-starter/images/diamonds/diamonds-r07.svg"},
    {name: "c07", rank: 24, image: "cards/card-starter/images/clubs/clubs-r07.svg"},
    {name: "s06", rank: 20, image: "cards/card-starter/images/spades/spades-r06.svg"},
    {name: "h06", rank: 20, image: "cards/card-starter/images/hearts/hearts-r06.svg"},
    {name: "d06", rank: 20, image: "cards/card-starter/images/diamonds/diamonds-r06.svg"},
    {name: "c06", rank: 20, image: "cards/card-starter/images/clubs/clubs-r06.svg"},
    {name: "s05", rank: 16, image: "cards/card-starter/images/spades/spades-r05.svg"},
    {name: "h05", rank: 16, image: "cards/card-starter/images/hearts/hearts-r05.svg"},
    {name: "d05", rank: 16, image: "cards/card-starter/images/diamonds/diamonds-r05.svg"},
    {name: "c05", rank: 16, image: "cards/card-starter/images/clubs/clubs-r05.svg"},
    {name: "s04", rank: 12, image: "cards/card-starter/images/spades/spades-r04.svg"},
    {name: "h04", rank: 12, image: "cards/card-starter/images/hearts/hearts-r04.svg"},
    {name: "d04", rank: 12, image: "cards/card-starter/images/diamonds/diamonds-r04.svg"},
    {name: "c04", rank: 12, image: "cards/card-starter/images/clubs/clubs-r04.svg"},
    {name: "s03", rank: 8, image: "cards/card-starter/images/spades/spades-r03.svg"},
    {name: "h03", rank: 8, image: "cards/card-starter/images/hearts/hearts-r03.svg"},
    {name: "d03", rank: 8, image: "cards/card-starter/images/diamonds/diamonds-r03.svg"},
    {name: "c03", rank: 8, image: "cards/card-starter/images/clubs/clubs-r03.svg"},
    {name: "s02", rank: 4, image: "cards/card-starter/images/spades/spades-r02.svg"},
    {name: "d02", rank: 4, image: "cards/card-starter/images/hearts/hearts-r02.svg"},
    {name: "h02", rank: 4, image: "cards/card-starter/images/diamonds/diamonds-r02.svg"},
    {name: "c02", rank: 4, image: "cards/card-starter/images/clubs/clubs-r02.svg"},
  ];

var playerScore = 0
var $p1ScoreCard =  $("#p1Score");
var compScore = 0
var $compScoreCard = $("#compScore");



// Go To War Button

$(".b1").click(goToWar)


  function goToWar() {
  playerCard = compCard = null;
  playerScore = 0;
  compScore = 0;
  warOver = false;
  $("#player1").attr("src", "https://i.imgur.com/kYrVfED.jpg");
  $("#comp1").attr("src", "https://i.imgur.com/Vd3oJxp.jpg");
  $("#p1Score").html(playerScore);
  $("#compScore").html(compScore);
  cards = _.shuffle(cards);
  $(".b2").removeAttr("disabled");
  $(".winnerTicker").html("Let the Battles BEGIN!");
  reset();
  render();
};


// Battle Button

$(".b2").click(function battle() {
	if (playerCard === null) {
      playerCard = 0;
      compCard = 51;
  } else {
    playerCard += 1;
    compCard -= 1;
  }
  score();
  if (playerCard === 25) warOver = true;
    render();
    gameOver();
  if (cards[playerCard].rank === cards[compCard].rank) {
      tieBreaker();
    }
});

function battleTie() {
    if (playerCard === null) {
      playerCard = 0;
      compCard = 51;
    } else {
      playerCard += 1;
      compCard -= 1;
    }
    score();
    if (playerCard === 25) warOver = true;
    renderTie();
    gameOver();  
};

//Scoring function

function score() {
    if (cards[playerCard].rank > cards[compCard].rank) {
      playerScore++;
    } else {
      compScore++;
    }
    if (cards[playerCard].rank === cards[compCard].rank) {
      tieBreaker();
    }
};

//TieBreaker function

function tieBreaker() {
  $("#pTCard1").html('<img src="https://i.imgur.com/kYrVfED.jpg">');
  $("#pTCard2").html('<img src="https://i.imgur.com/kYrVfED.jpg">');
  $("#pTCard3").html('<img src="https://i.imgur.com/kYrVfED.jpg">');
  $("#cTCard1").html('<img src="https://i.imgur.com/Vd3oJxp.jpg">');
  $("#cTCard2").html('<img src="https://i.imgur.com/Vd3oJxp.jpg">');
  $("#cTCard3").html('<img src="https://i.imgur.com/Vd3oJxp.jpg">');
  battleTie;
}; 

//Rendering scores and winner

function render() {
    $("#playerScore").html(playerScore);
    $("#compScore").html(compScore);
    $(".player1 img").attr("src", (cards[playerCard].image));
    $(".comp1 img").attr("src", (cards[compCard].image));
    if (cards[playerCard].rank > cards[compCard].rank) {
      $(".winnerTicker").html("PlayOR is VicTOR...");
    } else if (cards[playerCard].rank < cards[compCard].rank) {
        $(".winnerTicker").html("Comm-PEW-Torr...");
    }
};

function renderTie () {
    $("#playerScore").html(playerScore);
    $("#compScore").html(compScore);
    $(".pTCard1 img").attr("src", (cards[playerCard].image));
    $(".cTCard1 img").attr("src", (cards[compCard].image));
    if (cards[playerCard].rank > cards[compCard].rank) {
      $(".winnerTicker").html("PlayOR is VicTOR...");
      playerScore+2;
      //render();
    } else if (cards[playerCard].rank < cards[compCard].rank) {
        $(".winnerTicker").html("Comm-PEW-Torr...");
        compScore+2;
        render();
      } else {
          renderTie2();
        }
};

function renderTie2 () {
    $("#playerScore").html(playerScore);
    $("#compScore").html(compScore);
    $(".pTCard2 img").attr("src", (cards[playerCard].image));
    $(".cTCard2 img").attr("src", (cards[compCard].image));
    if (cards[playerCard].rank > cards[compCard].rank) {
      $(".winnerTicker").html("PlayOR is VicTOR...");
      playerScore+4;
      //reder();
    } else if (cards[playerCard].rank < cards[compCard].rank) {
        $(".winnerTicker").html("Comm-PEW-Torr...");
        compScore+4;
        render();
      } else {
          renderTie3();
        }
};

function renderTie3 () {
    $("#playerScore").html(playerScore);
    $("#compScore").html(compScore);
    $(".pTCard3 img").attr("src", (cards[playerCard].image));
    $(".cTCard3 img").attr("src", (cards[compCard].image));
    if (cards[playerCard].rank > cards[compCard].rank) {
      $(".winnerTicker").html("PlayOR is VicTOR...");
      playerScore+6;
      //render();
    } else if (cards[playerCard].rank < cards[compCard].rank) {
        $(".winnerTicker").html("Comm-PEW-Torr...");
        compScore+6;
        render();
      } else {
         render();
        }
};

//When the game ("WAR") ends.

function gameOver() {
    if (playerScore === 21) {
      $(".winnerTicker").html("WAR is WON. Way to Kill 'em Player.");
      warOver = true;
    } else if (compScore === 21) {
        $(".winnerTicker").html("WAR is WON... by the Comp. Get it together Player.");
        warOver = true;
    }
};


// Resetting the game.

function reset() {
  playerScore = 0;
  compScore = 0;
  $(".player1").html('<img src="https://i.imgur.com/kYrVfED.jpg">');
  $(".comp1").html('<img src="https://i.imgur.com/Vd3oJxp.jpg">');
  $(".pTCard1").html('<img src="http://www.tattoostime.com/images/470/celtic-tribal-triangle-tattoo-design.png">');
  $(".cTCard1").html('<img src="http://www.cliparthut.com/clip-arts/528/celtic-knot-528537.png">')
  cards = _.shuffle(cards);
};

//var playerCard = 0;
//var compCard = 51;
 // console.log(cardRank[cards[playerCard]] > cardRank[cards[compCard]]);

  //console.log((cards[playerCard]) < (cards[compCard]));

});