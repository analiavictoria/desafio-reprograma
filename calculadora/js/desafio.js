var inputValor = document.querySelector("#valor-hora")
var inputHoras = document.querySelector("#horas-projeto")

var resultado = document.querySelector('span')

function calcularValorProjeto() {
    var valorHora = inputValor.valueAsNumber
    var horasProjeto = inputHoras.valueAsNumber 

    if (inputValor.value <= 0 || inputHoras.value <= 0) {
        alert("Favor, informar os dados para o cálculo!");
   }     
    else {
        var valorProjeto = (valorHora * horasProjeto).toFixed(2) 
    }

    resultado.textContent = 'R$' + valorProjeto.replace(".", ",");
}
//foi uma luta, mas consegui incrementar um alert() e um replace(). 