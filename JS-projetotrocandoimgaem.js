const images = [
    "imagem1.img.jpeg",
    "imagem2.img.jpeg",
    "imagem3.img.jpeg",
    "imagem4.img.jpeg",
    "imagem5.img.jpeg",
    "imagem6.img.jpeg"
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function() {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]

})