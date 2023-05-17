let colorList = []
let alertaLista = ('Sua lista de cores ficou assim: ')

for (let i = 1; i <=3; i++) {
    let userColor = prompt('Digite uma cor ' + i + ': ')
    colorList.push(userColor)
}

//alert('Sua lista de cores ficou assim: ' + colorList)

document.getElementById('listcolor').innerHTML = alertaLista + colorList