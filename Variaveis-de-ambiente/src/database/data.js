async function conectarBancoDeDados(usuario, senha){
    if(usuario === process.env.USERDATABASE && senha === process.env.USERPASSWORD){
        console.log("Conectado ao banco de dados com sucesso!");
    }else{
        console.log("Falha ao conectar ao banco de dados. Verifique suas credenciais.");
    }
}

export default conectarBancoDeDados;