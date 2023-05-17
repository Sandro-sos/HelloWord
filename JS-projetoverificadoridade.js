let checkId = document.getElementById('check-id')
let ageInput = document.getElementById('age-input')

checkId.addEventListener('click', function() {
    let age = ageInput.value
    let message = (age >= 18) ?'Você ja é um adulto.' : 'Você não é um adulto'
    alert(message)
    ageInput.value = ''
})