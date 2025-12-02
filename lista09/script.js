function media() {
    var n = parseFloat(document.getElementById("m1").value)
    var resultado = document.getElementById("resposta")

    if(n >= 6){
        resultado.textContent = "APROVADO, PARABÉNS."
    }else{
        resultado.textContent = "REPROVADO, ESTUDE MAIS."
    }
}