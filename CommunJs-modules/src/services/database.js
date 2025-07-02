//Export default ou exportação padrão

exports.connecToDatabase = (nomeDoBnaco) => {
    console.log("Conectando ao banco de dados => " + nomeDoBnaco)
}

exports.disconnectDatabase = () =>{
    console.log("Desconectando do banco de dados")
}