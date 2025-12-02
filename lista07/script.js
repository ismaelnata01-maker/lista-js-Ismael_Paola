function media() {
    var num = parseFloat(document.getElementById("m1").value)
    var fim = document.getElementById("resposta")
    
    

    for( let i = 1; i <= 10; i++){
       let mult = num + i
       fim.textContent += `${num} + ${i} = ${mult}`
    
    }


}