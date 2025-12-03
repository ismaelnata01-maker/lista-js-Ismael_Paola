function media() {
    var C = parseFloat(document.getElementById("m1").value)

    var tempFinal = document.getElementById("resposta")
    var Fahrenheit = 9 * C / 5 + 32

        tempFinal.textContent = Fahrenheit
        tempFinal.style.color = "red"
}