let fila = []
let opcao = ""

do{
    let pacientes = ""
    for( let i = 0; i < fila.length; i++){
    pacientes += (i + 1) + "º" + fila[i] + "\n "
} 
    opcao = prompt(
        "Pacientes: \n" + pacientes +
        "\n Escolha uma ação: \n 1. novo paciente \n 2. consultar paciente \n 3. sair"
    )
        switch (opcao){
            case "1":
                const novoPaciente = prompt("qual é o nome do paciente ")
                fila.push(novoPaciente)
                break
            case "2":
                const pacienteConsultado = fila.shift()
                if(pacienteConsultado){
                    alert(pacienteConsultado + "foi removido da fila.")
                }else{
                    alert("não há pacientes na fila...")
                }
                
                break
            case "3":
                alert("encerrando...")
                break
                default:
                alert("opcao invalida!")
        }

}while(opcao !== "3")