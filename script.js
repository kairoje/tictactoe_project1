/*
    - First Draft of Javascript -

    I need each of the squares in the game grid to be clickable (hoverable later on)

    Each box can accept only choice between two options (X & O)
        - function with the selection possibilities

*/

//Variables:
let squares = document.querySelectorAll(".square");

//console.log(squares);

const player = document.querySelectorAll(".player");
//console.log(player);

let activePlayer = "X";

const newGameBtn = document.querySelector("#newGame");
//console.log(newGameBtn);

const winRules = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
//console.log(winRules);

//Functions:


//mark each square with either and X or an O depending on the active player
function markSquare(){
    for (let i = 0; i < squares.length; i++) {
        let element = squares[i];
        element.addEventListener('click', () => {
            if(element.textContent == ""){
                element.textContent = activePlayer;
                console.log(`It's ${activePlayer}'s turn.`);
            }
            winner()
        })
    }
}

markSquare()

//activePlayer uses a ternary operator to determine which symbol is active
function switchPlayer(){
    activePlayer = (activePlayer == "X") ? "O" : "X";
}


function winner(){
    let victory = false

    for (let i = 0; i < winRules.length; i++) {
        let aWin = winRules[i]
        aWin.forEach((element) => {
            if(element[0] === element[1] && element[1] == element[2]){
                victory = true;
            } else if(element[0] !== element[1] && element[1] !== element[2]){
                victory = false
            }
        })
    }
    switchPlayer()


    if(victory == true){
        console.log(`${activePlayer} wins!`);
    } else {
        console.log(`It's a draw`);
    }

    //restart game
}

