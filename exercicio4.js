const turista = prompt("e ai nerd thunks!, Qual o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("você ja visitou alguma cidade? (sim\não)")

while (continuar === "sim" || "SIM"){
    let cidade = prompt("qual é o nome da cidade visitada")
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt("você visitou alguma outra cidade (sim\Não)")
}
alert(
    "turista" + " " + turista +
    "\n quantidade de cidades visitadas:" + " " +contagem +
    "\n cidades visitas: \n"+ " " + cidades

)


// while( continuar === "não")
    //alert("obrigado por avaliar nosso aplicativo" + " " + turista)
