var altura;
var peso;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);

    // console.log(imc);
    
    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> Cuidado você está muito abaixo do peso!";
    } else if (imc > 17 && imc <= 18.49){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> Cuidado você está abaixo do peso.";
    } else if (imc > 18.5 && imc <= 24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> Você está no peso ideal.";
    } else if (imc > 25 && imc <= 29.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> Cuidado você está com sobrepeso."
    } else if (imc > 30 && imc <= 34.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> CUIDADO, obesidade grau I!"
    } else if (imc >35 && imc <=39.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> CUIDADO, obesidade grau II!"
    } else if (imc > 40){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi: "+imc+"<br/> CUIDADO, obesidade grau III!"
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}