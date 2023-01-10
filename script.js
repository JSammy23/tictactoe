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
}

const initializeGame = (data) => {
    initializeVariables(data)
    console.log(data)
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