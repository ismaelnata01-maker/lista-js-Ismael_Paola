function media() {
    var n1 = parseFloat(document.getElementById("m1").value)
    var n2 = parseFloat(document.getElementById("m2").value)
    var n3 = parseFloat(document.getElementById("m3").value)

    var media = document.getElementById("resposta")
    var conta = n1 + n2 + n3

        media.textContent = conta
}