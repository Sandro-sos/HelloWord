//Parte 1 (Saudação, Hello - List)

//Preenchimento no começo da tela (NOME E IDADE)
//let firstName = prompt ('Digite seu nome completo:')
//let date = prompt ('Digite a sua data de nascimento com a /:')

//console.log (firstName)
//console.log (age)
//-------------------------------------------------

//Mensagem automatica de baixo do (HELLO WORD)
document.getElementById('greeting').innerHTML = 'Olá! Seja bem-vindo, ' + firstName + '!'
document.getElementById('date').innerHTML = 'Sua data de nascimento, ' + date
//-------------------------------------------------

//Codigo de lista [Arrays = List]
let friends = ['Emilly', 'Gabriel', 'Pedó', 'Giordano']
console.log (friends)
//-------------------------------------------------

//Parte 2 (Temperatura Conversão de Celsius para Fahrenheit)

function calcularTemperatura() {
    var temperaturaDigitada = document.getElementById("temperatura").value
    var temperaturaEmfahrenheit = temperaturaDigitada * 1.8 + 32
    document.getElementById('resultado-temperatura').value = temperaturaEmfahrenheit
}
//-------------------------------------------------

//Mensagem automatica (Temperatura)
//document.getElementById('temp celsius').innerHTML = 'Temperatura de ºC= ' + Celsius + '!'
//document.getElementById('temp fah').innerHTML = 'Temperatura de °F= ' + Fahrenheit.toFixed(2) + '!'
//-------------------------------------------------

//Parte 3 (Grade de notas)
//let grade = prompt('Digite a nota do aluno: ')

if (grade > 100) {
    alert('Nota invalida')
}

else if (grade >= 90) {
    alert('Aluno nota A')
}

else if (grade >= 80) {
    alert('Aluno nota B')
}

else if (grade >= 70) {
    alert('Aluno nota C')
}

else if (grade >= 60) {
    alert('Aluno nota D')
}

else {
    alert('Aluno nota F')
}