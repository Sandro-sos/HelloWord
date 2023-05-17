let randomNumber = Math.floor(Math.random() * 100)
let tries = 0
console.log (randomNumber)

function checkGuess(){
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    tries++

    if (guess == randomNumber){
        message.innerHTML = 'Parabéns você acertou o número em ' + tries + ' ' + 'vez!'
    }
    else if (guess < randomNumber){
        message.innerHTML = 'Está a baixo do número, tente novamente.'
    }
    else {
        message.innerHTML = 'Está acima do número, tente novamente.'
    }
}
