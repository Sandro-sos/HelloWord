//Preenchimento no começo da tela (NOME E IDADE)
let firstName = prompt ('Digite seu nome completo:')
let age = prompt ('Digite a sua data de nascimento com a /:')

console.log (firstName)
console.log (age)
//-------------------------------------------------
document.getElementById('nome').innerHTML = 'Olá! Seja bem-vindo, ' + firstName + '!'
document.getElementById('idade').innerHTML = 'Sua data de nascimento, ' + age
//-------------------------------------------------
