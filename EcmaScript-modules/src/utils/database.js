async function conetarComBancoDeDados(nomeDoBanco){
    
    console.log(`Conectado ao banco de dados => ${nomeDoBanco}`)
}


async function desconetarComBancoDeDados(){
    
    console.log(`Desconectado ao banco de dados`)
}

//Export default com EcmaScript
//export default conetarComBancoDeDados



//Exportar mais de uma função
export {conetarComBancoDeDados, 
    desconetarComBancoDeDados,
    quebraLinha
}