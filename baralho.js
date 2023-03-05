const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "cartas no baralho" + baralho.length +
        "\n 1. adicionar uma carta \n 2. puxar uma carta  \n 3.sair"
    )
    switch (opcao){
        case "1":
            const novaCarta = prompt("qual é a carta para adicionar")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada){
                alert("não há nehuma carta no baralho...")
            }else{
                alert("você puxou um(a)" + cartaPuxada)
            }
            break
        case "3":
            alert("saindo da aplicação..")
            break
            default:
                alert("opção invalida")
    }
} while(opcao !== "3");