function media() {
    var nota1 = parseFloat(document.getElementById("m1").value)
    var nota2 = parseFloat(document.getElementById("m2").value)
    
    var media = document.getElementById("resposta")
    media.textContent = nota1 * nota2

    
}