## Ticky-Tacky-Toe
---

### Behind the Scenes

This game was built by [Andrew Musselman](https://github.com/Andrew-Musselman). The basic structure was written in HTML, styled in CSS, and all functionality was written in JavaScript. The JavaScript relies on a strict separation of the data model from DOM manipulation - meaning every user interaction updates the data model, and then the DOM is updated from the data model.

### Open the Game

To play the game clone this repo onto your local device, cd into the the new directory and run open index.html in the command line of your terminal, this will open the game in your browser.


### Starting the Game

This is a fully functional Tic-Tac-Toe game. On page load players are prompted to select their player tokens from drop down menus on either side of the game board. Once each player has selected their token click the *Start Game* button.

<img width="1074" alt="Page Load" src="https://user-images.githubusercontent.com/92277979/150051873-3bb6c17a-3ff8-47ae-a363-58bb0d7ea41f.png">

<img width="242" alt="Player One Token Menu" src="https://user-images.githubusercontent.com/92277979/150051576-f265f260-c21d-493f-a117-47f43afdf5b8.png">  <img width="233" alt="Player Two Token Menu" src="https://user-images.githubusercontent.com/92277979/150051581-5ada1660-0ee3-4bf0-98ac-cadad1febcd3.png">

### Playing the Game

After the game has started players will see that the *Start Game* button and the token drop down menus have disappeared. Now above the game board it will show the token of the player who's turn it is. That player can then click on any square in the game board that has not already been selected to place their token in that square.


![Game Play](https://user-images.githubusercontent.com/92277979/150052227-1a1e95c5-5993-4899-94a9-61aa142b99c0.gif)

### Ending the Game

To win the game a player needs to claim three spaces in a row. If there are no spaces left and neither player has claimed three in a row this results in a draw. The game ends after someone wins or it results in a draw. Once the game is over the game board resets itself for a new game, and if there is a winner that is updated in the player data section on either side of the game board.

![End Game](https://user-images.githubusercontent.com/92277979/150052565-29b9e194-b32f-4c31-8ac0-75e6dec444c7.gif)


### Wins and Challenges
Writing the code for this game one of my biggest personal wins was keeping the Data Model and DOM manipulation separate. I wrote out all of the code for the data model and had the game fully functional before I worked on the DOM manipulation. I was very proud of this accomplishment, and it helped me better understand what every function was doing.

One of my biggest challenges in this project was writing the logic to check for win conditions and to check for Draw. This code was challenging for me because of the way I set up my Game class where every space was an object in an array. Nesting the data this way made it difficult for me to write the logic concisely in order to check for specific conditions.
