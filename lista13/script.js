function media() {
    var num = parseFloat(document.getElementById("m1").value)

    var multiplo1 = document.getElementById("resposta")
    
     multiplo = num % 5
    
    if(multiplo == 0){
    multiplo1.textContent = "O número é múltiplo de 5"
    }else{
    multiplo1.textContent = "O número não é múltiplo de 5"
    }
        
}