const p = require("./services/products")
const config = require("./services/config")

async function main(){
    console.log("Hello world")
    p.getFullName("123", "produto")
    // p.getFullName("234", "lanterna") CTRL + K+ C COMENTA TUDO
    // p.getFullName("788", "geladeira")
    // p.getFullName("345", "xbox")
    // p.getFullName("564", "notebook")
    // p.getProductLabel("geladeira")

    console.log(config.production)


}

main()