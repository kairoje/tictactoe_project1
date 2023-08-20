/*
    - First Draft of Javascript (with notes) -

    I need each of the squares in the game grid to be clickable (hoverable later on)

    Each box can accept only choice between two options (X & O)
        - function with the selection possibilities

    Win logic - 3 squares's symbols match to declare winner and game ceases 
*/

//Variables:
let squareArr = Array.from(document.querySelectorAll(".square"));
//console.log(squares);

let player = document.querySelector("#player");

let activePlayer = "X";

player.textContent = `${activePlayer}'s turn.`

const newGameBtn = document.querySelector("#newGame");
//console.log(newGameBtn);

let clicks = 0;

let winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let victory = false;



//Functions:

function checkForWin(){

//if at least five clicks have been made and thereafter, a loop through the winning combinations is initiated. 
    if(clicks >= 5){
    
//for each win combo, the indicies are saved as an array
        for (const combo of winCombos){
            const [a,b,c] = combo; 

//if the text content of combo index matches the activeplayer string and the other indicies, a winner will be declared and the loop can end
            if(
                squareArr[a].textContent === activePlayer &&
                squareArr[a].textContent === squareArr[b].textContent &&
                squareArr[a].textContent === squareArr[c].textContent
            ){
                victory = true;
                break;
            } 
        }
    }

//when winner is declared that message will display
    if(victory){
        player.textContent = `${activePlayer} wins!`
    }
}

//activePlayer uses a ternary operator to determine which symbol is active
function switchPlayer(){
    activePlayer = (activePlayer == "X") ? "O" : "X";
    player.textContent = `${activePlayer}'s turn`
}

function startGame(){
        
//at game start each square will be empty and can be clicked
    squareArr.forEach(square => {
        square.addEventListener('click', () => {

//if a win has been declared or a square isn't empty, the square(s) click will be disabled
            if(victory || square.textContent !== ""){
                return;
            }

//...otherwise number of clicks increases by 1. The square that is clicked will be filled with active player sumbol. Then a win check is initiated.
            clicks++
            console.log(clicks);
            square.textContent = activePlayer;
            checkForWin()

//if theres no win but 9 clicks (meaning each square has been clicked) the game ends with a draw, but if there's no win and less than 9 clicks, switch players.
            if(!victory && clicks === 9){
                player.textContent = "Draw";
            } else if(!victory){
                switchPlayer()
            }
        })
    })
}

startGame()

//to reset the game board after a victory, or draw, the new game button can be clicked 
newGameBtn.addEventListener('click', () => {
    squareArr.forEach(square => {
        square.textContent = "";
    })

//the clicks and the victory boolean are reset to original status. The player who wins, or last active player is the first for the new game
    clicks = 0;
    victory = false;
    player.textContent = `${activePlayer}'s turn`;
})



