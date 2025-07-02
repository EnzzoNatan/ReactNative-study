//TODAS AS FUNÇÕES QUE LIDAM COM PRODUTO

const productType = {
    version: "Digital",
    tax: "x1"
}

async function getFullName(codeId, prodcutName) {
    console.log("\n")
    console.log( "Produto: " + codeId + " -- " + prodcutName)
    await quebraDeLinha()
}

//Hidden function ou função escondida, pois só é lida dentro de outra função
async function quebraDeLinha(){
    console.log("\n")
}

async function getProductLabel(prodcutName){
    return console.log("Produto: " + prodcutName)
}



//Exportando as funções 
module.exports = {
    getFullName, // O export pode exportar mais de uma função
    getProductLabel,
    productType,
}

