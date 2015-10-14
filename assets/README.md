->![War Monger](http://1.bp.blogspot.com/-M8ikoxxokWM/T2qIZHuzMdI/AAAAAAAAAbQ/VvuyWtoZpIc/s1600/warmonger.jpg)<-

#Project 1 - dOtMoNgEr...

*****

###User Stories

**User Role**

	* Role is to operate the game on screen from browser open to close.
		* Manages all mouse action / clicks.
			* Clicks to begin a new game.
			* Clicks to shuffle deck after game over.
			* Clicks to deal new deck to user and computer players.
			* Clicks to play each hand.
			
	* User role in order of play:
		- Opens browser
		- shuffles new deck
		- starts new game (deals cards randomly to computer and player hands
		- plays each hand until all cards played.
			- in the case of the tie, clicks individual card until winner 			determined for that hand.
		- clears game when all hands have been played.
		
**COMPUTER ROLE**
	
	* Computer's role is completely random.
	* Computer randomizes the cards to be visited after each play, for each 	player.
	* Randomizes the shuffle and deal to each player after a new game has begun.
	* Computer tallies the wins after each play in scoreboards.
	
	
**NOTES**

- have "clear game" button replace the "new hand" button when game is over.

- create an alert for the player to click the "shuffle deck" button before the "new deal" button is clicked.

- research card animations and shuffle techniques. 

*****
###MVP
(Needed for base functionality of game and simle operation.)

- Dumbed-down version: Rank each card individually to avoid potential ties, otherwise go three-card draw for breaker.
- Play area needs to be fed two different cards at the same time
	- (except in the case of a tie, at which time 3 cards will need to flop.)
- 	Two score boxes need to tally the total hand wins for each player.
- 	the alert box needs to declare a winner.
- 	new game button after all 52 cards are used.
- 	random shuffle and even 26 cards a piece to each player.

1.) **New window** opens to game console.

2.) Clicking the "**Shuffle**" button needs to shuffle the deck and deal evenly to computer and player.

3.) Clicking the "**Battle / New Hand**" button deals one card from each and displays them in the **middle** of the screen.

4.) If player card is higher rank than computer card, then **add 1 point to player scorecard** and clear the play area (fade 3 sec?).

5.) Visa-versa if computer card is higher rank than player card, add 1 point to computer scorecard and clear the play area (fade 3 sec?).

6.) Click the "**Battle / New Hand**" button until all cards have been played.

7.) When all 26 battles have been played, **winner with the highest score** is **alerted as winner**.

8.) In the event of a **tie**, player will **click "Battle / New Hand"** button to turn 3 cards from each to go to "**War**." These 3 cards will appear upside down on each side, and as the "Battle / New Hand" button is clicked, the **first winner will collect all 6 points** for the cards played.

9.) When a winner is declared after all cards played, **alert "Winner is ' '!"**

10.) Click "**Shuffle Cards**" to clear game, randomize deck and deal to players.

-----
###Ice Box - THIS is the game.


- [x] Assign an image for each value in the **deck**[array].
- [x] As a player, "**Shuffle/Deal**" button used to clear out gameboard, randomize card deck(array).
- [x] As a developer, "**Battle**" button selects the first and last position of the shuffled deck and assignes to "**player**" and "**computer**".  The "**player**" position receives the low position in the array while the "**computer**" receives the high position in the randomized array.
	- [x] As a developer, corresponding card image is assigned to "**playerCard**" area and "**computerCard**" area.
	- [ ] As a developer, if **value** of "**playerCard**" is greater than the value of "**computerCard**", *display "Winner is (player)!" in the **.winnerTicker** box* and increase "**playerScore**" +1.
		- else (do the same for computer).
- [ ] As a developer, when all cards in the array have been played, alert "**(Player or Computer) wins the WAR, damn dotMongers...**".
	- [ ] As a player, click "**OK**", bring up new **alert** "Click **Shuffle/Deal** for new game."