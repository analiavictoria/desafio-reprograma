var inputSalario = document.querySelector("#ganho-mes") //declara e seleciona da linha no html
var inputHoras = document.querySelector("#horas-dia")

var resultado = document.querySelector('span')//seleciona o span

function calcularValorHora() {
    var salario = inputSalario.valueAsNumber //convert o input pra numero
    var horas = inputHoras.valueAsNumber 

    var horasMes = horas * 22 //trabalha 22 dias por mes

    var valorHora = salario / horasMes //divisao

    var valorDuasCasas = valorHora.toFixed(2) //ajusta os digitos em 2 depois da virgula

    resultado.textContent = 'R$' + valorDuasCasas //mostra o que tem dentro
}