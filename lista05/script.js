function media() {
    var peso1 = parseFloat(document.getElementById("m1").value)
    var peso2 = parseFloat(document.getElementById("m2").value)

    var media = document.getElementById("resposta")
    var conta = peso1 + peso2

        media.textContent = conta / 2
}