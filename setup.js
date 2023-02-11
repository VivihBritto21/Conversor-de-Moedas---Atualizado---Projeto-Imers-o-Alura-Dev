var nome = prompt('Olá, qual seu nome')
const valorEmReal = document.querySelector("#valorEmReal");
const resultado = document.querySelector("#resultadoDolar");

function converteRealEmDolar() {
  const dolar = parseFloat(valorEmReal.value) * 5.07;
  resultado.value = dolar.toFixed(2);
}

const botaoConverter = document.querySelector("#botaoConverter");
botaoConverter.onclick = converteRealEmDolar;