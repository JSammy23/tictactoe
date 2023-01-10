const gameForm = document.getElementById('gameForm')
gameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(gameForm)
    const data = Object.fromEntries(formData)
    console.log(data)
})

function openForm() {
    document.getElementById('formPopUp').style.display = 'block'
}

function closeForm() {
    document.getElementById('formPopUp').style.display = 'none'
}