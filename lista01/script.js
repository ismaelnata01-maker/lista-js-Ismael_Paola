function media() {
    var metro = parseFloat(document.getElementById("m1").value)
    
    var media = document.getElementById("resposta")
    media.textContent = metro * 100

    }