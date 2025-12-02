function media() {
    var idade = parseFloat(document.getElementById("m1").value)
    var sexo = parseFloat(document.getElementById("m2").value)

    var resultado = document.getElementById("resposta")

        if(sexo == 'M'){
        if(idade >= 50){
             resultado.textContent = "tem direito ao desconto."
        }else{
             resultado.textContent = "não tem direito ao desconto."
        }
    }else{
        if(idade >= 40){
             resultado.textContent = "tem direito ao desconto."
        }else{
             resultado.textContent = "não tem direito ao desconto."
        }
    }

}