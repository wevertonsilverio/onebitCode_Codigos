const numero = parseFloat(prompt("Óla eu sou o robo da tabuada" + "\n informe um numero de 1 a 20 para calcular a tabuada:"))
let resultado = " "

for(let fator = 0; fator <= 20; fator ++){
    resultado += "->" + numero + "*" + fator + " = " + (numero * fator) +
    "\n "
}

alert("resultado da tabuada de:" + numero + "\n\n" + resultado)