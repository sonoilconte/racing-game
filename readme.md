<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## User story for racing game
 - user sees a screen with two car icons on it
 - user pushes start to play
 - each player has a button they push to advance their car, the faster they push it, the faster it moves across the screen
    - in more advanced version, they can also control the direction of their car, and they race in 2 dimensions, on a 2-D track
- when a car reaches finish line, stop the game, we announce which car won
- when a player wins, we increment their score by oriented
  - maybe there's a grand winner after a certain number of wins

## Objects needed

car - position - number, or array of 2 numbers
    - url for image
    - method - gas pedal - changes the position of the car
    - method - cannot pass, in 2 d, one car must go around the other to pass

track - length
      - width if 2-D track

game - score
     - method - reset the game/track
     - method - has someone won?




## Objects needed



# Training: Model a Game with OOP

You've learned about OOP, but let's look at how to **incorporate object oriented programming patterns into a web site**.  This document has an example of how we might approach making a card-matching memory game.

### User Stories & Game Mechanics
1. A user will be able to see a set of face-down cards.
2. A user will be able to select a card to "flip it over" and see its other side.
3. If the user flips two matching cards face-up at the same time, the cards will be removed from the game.
4. If the user flips two non-matching cards face-up at the same time, both cards will turn back face down.
5. The user wins when they've matched all the cards!

### Check for Understanding

What are some categories of objects we might want to build when writing the code for a Memory game?

<details><summary>click to see examples</summary>

  Did you think of making a `Card` object type? A `Game`?

</details>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Data Structures for "Memory" (Independent Practice)
Let's consider object types Card, Game, and Pair.

Work with a partner to list some properties and methods of cards, the game itself, and a particular pair.

* List the type of each property (number, boolean, `Card`, etc.).
* List the parameters that each method will take.
* Don't forget a constructor!

**Card**
<details><summary>click for examples properties</summary>
  - `faceImage` (string)
  - `isFaceUp` (boolean)
  - `isMatched` (boolean)
  - `flipOver()` (Function - change whether the card is currently face up)
  - `Card(options)` (Function - constructor, create a card based on options like whether it should be a random image or what the image should be)
</details>

**Pair**
<details><summary>click for examples for Pair</summary>
  - `card1` (Card)
  - `card2` (Card)
  - `addCard(someCard)` (Function - add a specific card to the pair)
  - `isMatch()` (Function - check if this pair is a match)
  - `Pair()` (Function - constructor, create an empty pair)
</details>

**Game**
<details><summary>click for examples for Game</summary>
  - `current_guess` (Pair)
  - `cards` ([Card])
  - `reset()` (Function - resets the game!)
  - `randomize()` (Function - creates randomized game)
  - `Game(numCards)` (Function - constructor)
  - `removeCard(card)` (Function - remove this card from the game)
  - `hasWon()` (Function - check if the game has been won!)
  - `celebrate()` (Function - display a win message)
</details>

### User Stories

We build "user stories" as a way to structure the main capabilities of the sites we build. These stories are often phrased as "a user will be able to..." and make sure they discribe how the site will work. Each user story can be broken down into the tasks that will be required to make this functionality possible.

1. A user will be able to see a set of face-down cards.
  * Create HTML structure to display cards on screen (Handlebars?).
  * Ensure that cards start out displayed face-down (in `Card` constructor?).

2. A user will be able to select a card to "flip it over" and see its other side.
  * Add click event listener to cards that:
     - shows the other side of the card (`flipOver`)
     - creates or updates a pair (don't add same card twice though!)
     - checks if the cards in the pair match (`isMatch`)
     - continues according to result (see 3 and 4, below)

3. If the user flips two matching cards face-up at the same time, the cards will be removed from the game.
  * Assuming `isMatch()` gave true for the current pair:
    - set a short timer so the user can see that the cards matched (`setTimeout`), then...
    - replace each card in the pair with a "blank space" image to let user know it's been removed
    - use `off` to take off the click event listener from both cards
    - remove both cards from the game's list of cards

4. If the user flips two non-matching cards face-up at the same time, both cards will turn back face down.
  * Assuming `isMatch()` gave false for the current pair:
    - set a short timer so the user can see the cards (`setTimeout`), then...
    - flip each card in the pair back over so they're face-down

5. The user wins when they've matched all the cards!
  * Every time there is a match, the Game should also check if its cards array is now empty. (`hasWon`)
  * If so, show a win screen (`celebrate`)


###Potential Challenges / Development Questions

1. How to randomize or shuffle card locations at the beginning of the game?
2. How to ensure that all the cards have matches?
3. How to change the image for a card that's face-down, face-up, or matched and removed from game?
4. Is there a way to hide the identity of a card even from users who know how to use the Chrome dev tools?
5. Cool card flip animation?!

### Deliverable

Design user stories, data structures, development stories, and potential challenges for a **racing game** in which two players use the keyboard to control "cars" that race across the screen.

Here are some popular bonus features that would affect your data structure plan:

1. How would you make your player's "cars" use custom images?
2. Can a player type in their name to see custom win messages?
3. Can you enable a reset button to restart the race?
4. How about a win counter that spans across multiple races?

As you work, you can edit this README to add a section at the top with your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment. Push your updates to GitHub and add a link to the repo to the "My Work" section of your website!
