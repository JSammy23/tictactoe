const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const gameForm = document.getElementById('gameForm')
gameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(gameForm)
    const data = Object.fromEntries(formData)
    initializeGame(data)
    closeForm()
})

const initializeVariables = (data) => {
    data.gameMode = +data.gameMode
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    data.playerOne = 'X'
    data.playerTwo = 'O'
    data.currentPlayer = 'X'
    data.gameOver = false
    data.round = 0
}

const addEventListenerToBoard = (data) => {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('click', (event) => {
            playMove(event.target, data)
        })
    })
}

const playMove = (box, data) => {
    // is game over? if so, don't do anything
    if(data.gameOver) {
        return
    } 
    // check if box is already taken
    if(data.board[box.id] === 'X' || data.board[box.id] === 'O'){
        return
    }
    //adjust DOM playermove & check for win
    data.board[box.id] = data.currentPlayer
    box.textContent = data.currentPlayer
    box.classList.add(data.currentPlayer === 'X' ? "player1" : "player2")

    data.round++

    // Check end conditions
    if(endConditions(data)) {
        return
    }

    // Change current player 
    changePlayer(data)
    
}

const endConditions = (data) => {
    if (checkWinner(data)) {
        // Adjust DOM to reflect win
        let winnerName = 
        data.currentPlayer === "X" ? data.player1Name : data.player2Name
        adjustDom("displayTurn", winnerName  + " has won the game!")
        return true
    } else if (data.round === 9){
        //Adjust DOM to reflect tie
        adjustDom("displayTurn", "It's a Tie!")
        data.gameOver = true
        return true
    }
    return false
}

const checkWinner = (data) => {
    let result = false;
    winConditions.forEach((condition) => {
      if (
        data.board[condition[0]] === data.board[condition[1]] && data.board[condition[1]] === data.board[condition[2]]
      ) {
        console.log('Player has won')
        data.gameOver = true
        result = true;
      }
    });
    return result;
};

const adjustDom = (className, text) => {
    const elem = document.querySelector(`.${className}`);
    // elem.style.display = 'block'
    elem.textContent = text
}

const initializeGame = (data) => {
    initializeVariables(data)
    adjustDom('displayTurn', `${data.player1Name}'s turn`)
    addEventListenerToBoard(data)
}

const changePlayer = (data) => {
    data.currentPlayer = data.currentPlayer === "X" ? "O" : "X"
    let displayTurnText = data.currentPlayer === "X" ? data.player1Name : data.player2Name
    adjustDom('displayTurn', `${displayTurnText}'s turn`)
}

function openForm() {
    document.getElementById('formPopUp').style.display = 'block'
}

function closeForm() {
    document.getElementById('formPopUp').style.display = 'none'
}