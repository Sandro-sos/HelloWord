//CALCULADORA DE PROCETAGEM DE GORJETA
let valorConta = 0
let gorjeta = 0
let valorTotal = 0
let valorGorjeta = ('O valor total com a gorjeta é de $: ')

valorConta = parseFloat(prompt('Digite o valor da conta:'))
gorjeta = parseFloat(prompt('Digite a gorjeta (Decimal)%'))

gorjeta = (valorConta * gorjeta) /100
valorTotal = valorConta + gorjeta

//alert('O valor total com a gorjeta é de $' + valorTotal)

document.getElementById('resultadogorjeta').innerHTML = valorGorjeta + valorTotal
