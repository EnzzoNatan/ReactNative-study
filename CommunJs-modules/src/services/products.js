//TODAS AS FUNÇÕES QUE LIDAM COM PRODUTO

async function getFullName(codeId, prodcutName) {
    console.log("\n")
    console.log( "Produto: " + codeId + " -- " + prodcutName)
}


async function getProductLabel(prodcutName){
    return console.log("Produto: " + prodcutName)
}



//Exportando as funções 
module.exports = {
    getFullName, // O export pode exportar mais de uma função
    getProductLabel
}

