# tictactoe_project1
Tic Tac Toe Project for Interapt Immersive Bootcamp

Technologies used: HTML, CSS, Javascript

Wireframe:

![Tic Tac Toe Wireframe](t_t_t_wireframe.PNG)

Goals:
MVP Bronze:

- Simple layout with lines creating a nine square grid
- Each player is assigned either “X” or “O”
- Can click a grid position
- Highlight winner

Silver:

- Add tally mark to player for each win
- Add high score 
- Randomize marker selection
- Green background in playing field
- White text color

Gold:

- Change text style to match chalk
- Layover screen to display high score when button is clicked
- Layover screen to display winner (maybe a trumpet sound)
- Play against computer
- Add hover to grid


Planning:

Bronze:

*HTML*
    - Body
    - A section holds title, grid, player1 & 2, X & O
    - H1 element for "Tic Tac Toe"
    - A span/div for the grid holding the game squares

*CSS*
    - Grid for title and player => player Title player layout, center
        *3 columns 2 rows
    - Grid for game squares center page

*Javascript*
    - create a variable:
        for each of the squares
        for the player text
        for new game "button"
        winning rules
        array containing empty strings to correlate with empty square
        current player
        to tell whether the game is going or not

    - create a function:
        to start the game => logic: loop through each square listening for a click, also have new game button listen for a click, begin with text saying who's turn it is, make game run

        to check for whether or not a square has been clicked => logic: create a cell index variable, determine whether or not a square is empty, only allow squares to be clicked while game is running. If a square is clicked mark it with the current players mark, check for a winner.

        to switch between players => logic: if currentPlayer is "X" then update to player "O" otherwise currentPlayer should update to player "X"

        to check to see if theres a winner => logic: set a variable to check wether or not a round bas been won.
        Loop through the array of win rules, set a variable to hold a win rule array index. Create variables to hold each one of the indicies that lead to a win. If those square indicies are empty checking for a winner can be skipped, if any of the rule indicies are matched current player is the winner. If the current player is a winner highlight player text and end the game, and if all the square are filled and there is no winner then game is a draw. Otherwise switch players









    


    
    