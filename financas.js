let saldo = prompt("digite o seu saldo:")
saldo = parseFloat(saldo)
let opcao = ""

do{
    opcao = prompt(
        "Saldo disponivel R$:" + saldo +
        "\n 1- adicionar dinheiro" +
        "\n 2- remover dinheiro " + 
        "\n 3- sair"
    )

    switch(opcao){
        case "1":
        saldo += parseFloat( prompt("informe o valor a ser adicionado:"))
        break
        case "2":
            saldo -= parseFloat( prompt("informe o valor a ser removido:"))
            break
        case "3":
            alert("saindo...")
            break
        default:
            alert("entrada invalida")
    }
} while( opcao !== "3" )