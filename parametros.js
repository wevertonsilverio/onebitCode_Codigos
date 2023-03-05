//function dobro( x ){
    //alert("O dobro de " + x + " é " + (x*2))
//}
//dobro(5)

//function dizerOla(nome = "visitante"){
//alert("ola," + nome + "!")
//}
//dizerOla("Weverton")
//dizerOla()

function criarUsuario(nome, email, senha,tipo = "admin" ){
    const usuario ={
    nome,
    email,
    senha,
    tipo
}
console.log(usuario)
}
criarUsuario("weverton", "weverton-silverio@hotmail.com", "weto2710")
criarUsuario