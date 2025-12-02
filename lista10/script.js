function media() {
    var idade1 = parseFloat(document.getElementById("m1").value)
    var idade2 = parseFloat(document.getElementById("m2").value)

    var resultado = document.getElementById("resposta")

        if(idade1 > idade2){
        resultado.textContent = "A PRIMEIRA PESSOA É A MAIS VELHA"
    }else if(idade2 > idade1){
        resultado.textContent = "A SEGUNDA PESSOA É A MAIS VELHA"
    }else{
        resultado.textContent = "AS IDADES SÃO AS MESMAS"
    }
}