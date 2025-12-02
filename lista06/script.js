function media() {
    var nome = document.getElementById("m1").value
    var idade = parseFloat(document.getElementById("m2").value)

        var resposta= document.getElementById("resposta")
        var respost = document.getElementById("respost")

        console.log(typeof nome, typeof idade)

    resposta.textContent = nome
    resposta.style.color = "red"
    
    respost.textContent = idade
    respost.style.color = "red"
}