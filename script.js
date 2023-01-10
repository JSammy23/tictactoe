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
    data.board = ['X', 1, 2, 3, 4, 5, 6, 7, 8]
    data.playerOne = 'X'
    data.playerTwo = 'O'
    data.currentPlayer = 'X'
    data.gameOver = false
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

    // Check end conditions
    if(endConditions(data)) {
        //adjust DOM to reflect conditions
    }
    
}

// const endConditions = (data){

// }

const initializeGame = (data) => {
    initializeVariables(data)
    // console.log(data)

    // Add event listener to board
    addEventListenerToBoard(data)
}

const updateTurnDisplay = () => {
    const turnDisplay = document.querySelector('.displayTurn')
    // Update current player turn
}

function openForm() {
    document.getElementById('formPopUp').style.display = 'block'
}

function closeForm() {
    document.getElementById('formPopUp').style.display = 'none'
}