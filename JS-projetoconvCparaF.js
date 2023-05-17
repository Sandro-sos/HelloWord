//Parte 2 (Temperatura Conversão de Celsius para Fahrenheit)

function calcularTemperatura() {
    var temperaturaDigitada = document.getElementById("temperatura").value
    var temperaturaEmfahrenheit = temperaturaDigitada * 1.8 + 32
    document.getElementById('resultado-temperatura').value = temperaturaEmfahrenheit
}
//-------------------------------------------------
