function media() {
    var valor = parseFloat(document.getElementById("m1").value)

    var precoFinal = document.getElementById("resposta")
    var desconto = valor / 10

        precoFinal.textContent = valor - desconto
}