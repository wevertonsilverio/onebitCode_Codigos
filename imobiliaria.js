const imoveis = []
let opcao = ""

do{
    opcao = prompt(
        "bem vindo(a) ao cadastramento de moveis!" +
        "Total de Imoveis:" + imoveis.length +
        "\n \n Escolha uma opção: \n"+
        "1- Novo imovel \n 2- Listar Imoveis \n 3- Sair"
    )
    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietario do Imovel:")
            imovel.quartos = prompt("informe a quantidade de quartos:")
            imovel.banheiros = prompt("Quantos banheiros possui o imovel ")
            imovel.garagem = prompt("o imovel possui garagem:")

            const confirma = confirm(
                "salvar este imovel \n" +
                "\n proprietario" + imovel.proprietario +
                "\n quartos:" + imovel.quartos +
                "\n banheiros:" + imovel.banheiros +
                "\n Garagem:" + imovel.garagem
            )
            if (confirma){
                imoveis.push(imovel)
            }
            break
        case "2":
            for( let i = 0; i < imoveis.length; i ++){
                alert(
                    "imovel" + (i + 1) + 
                    "\n proprietario" + imoveis[i].proprietario +
                    "\n quartos:" + imoveis[i].quartos +
                    "\n banheiros:" + imoveis[i].banheiros +
                    "\n Garagem:" + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando")
            break
        default:
            alert("Opcão Invalida")
            break
    }
}while(opcao !== "3");
