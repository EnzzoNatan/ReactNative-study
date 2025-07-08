import conectarBancoDeDados from "./database/data.js";

async function main() {

   await conectarBancoDeDados(process.env.USERDATABASE, process.env.USERPASSWORD);
}

main();
