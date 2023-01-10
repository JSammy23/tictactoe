const gameForm = document.getElementById('gameForm')
gameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(gameForm)
    const data = Object.fromEntries(formData)
    console.log(data)
})
