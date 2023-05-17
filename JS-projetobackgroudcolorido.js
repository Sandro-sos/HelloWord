
function changeBackgroundColor() {
    let colors = ['red', 'green', 'yellow', 'pink', 'blue', 'orange', 'purple', 'black', 'blueviolet']
    let radomColor = colors[Math.floor(Math.random() * 9)]
    document.body.style.backgroundColor = radomColor
}