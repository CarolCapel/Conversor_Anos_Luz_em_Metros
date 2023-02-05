
var nome = prompt("Seu Nome:")

function Converter() {

    var valorElemento = document.getElementById("valor");

    var valor = valorElemento.value;

    var valorNumerico = parseFloat(valor);

    var valorEmMentros = valorNumerico * 9460730777119564;

    console.log(valorEmMentros);

    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "Olá " + nome + " o valor é " + valorEmMentros + "m";

    elementoValorConvertido.innerHTML = valorConvertido;

}
