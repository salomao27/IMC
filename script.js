function calculoIMC(){
    let peso = document.getElementById("peso").value//peguei o peso 
    let altura = document.getElementById("altura").value//peguei a altura

    let imc = peso/(altura*altura);

    document.getElementById('resultado').innerHTML = imc.toFixed(2);
    verificaCategoria(imc);
    

}

function verificaCategoria(imc){
    let categoria = document.getElementById('imc');
    let peso = document.getElementById("peso").value//peguei o peso 
    let altura = document.getElementById("altura").value//peguei a altura
    
    if(peso == ""|| peso == null || altura == ""|| altura == null){
    document.getElementById('resultado').innerHTML = "Preencha as informações";
    }
    else if(imc < 16){
        categoria.innerHTML= "Baixo Peso(grau I)";
    }else if(imc == 16 || imc < 16.99){
        categoria.innerHTML= "Baixo Peso(grau II)";
    }else if(imc == 17 || imc < 18.49){
        categoria.innerHTML= "Baixo Peso(grau III)";
    }else if(imc == 18.50 || imc < 24.99){
        categoria.innerHTML= "Peso Adequado";
    }else if(imc == 25 || imc < 29.99){
        categoria.innerHTML= "Sobrepeso";
    }else if(imc ==30 || imc < 34.99){
        categoria.innerHTML= "Obesidade(grau I)";
    }else if(imc ==35 || imc < 39.99){
        categoria.innerHTML= "Obesidade(grau II)";
    }else if(imc == 40 || imc > 40){
        categoria.innerHTML= "Obesidade(grau III)";
    }
    
}
