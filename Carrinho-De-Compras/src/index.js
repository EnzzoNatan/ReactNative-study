import criarItem from "./services/item.js";
import * as servicoCarrinho from "./services/carrinho.js"

const carrinho = []
const listaDeDesejo = []


console.log("Bem-vindo ao carrinho de compras!");

console.log("\n")

const item1 = await criarItem("Peça de moto", 50.00, 3)
const item2 = await criarItem("Peça do carro", 80.00, 2)
const item3 = await criarItem("Motor", 1800.00, 5)

//ADICIONANDO ITEM AO CARRINHO
await servicoCarrinho.addItem(carrinho, item1)
await servicoCarrinho.addItem(carrinho, item2)
await servicoCarrinho.addItem(carrinho, item3)
await servicoCarrinho.verCarrinho(carrinho)


//DELETANDO ITEM DO CARRINHO
// await servicoCarrinho.deleteItem(carrinho, item1.nome)
// await servicoCarrinho.deleteItem(carrinho, item2.nome)



await servicoCarrinho.calcularTotal(carrinho)






//console.log("Total dos itens do carrinho: ","\n",item2.subtotal(),"\n",item1.subtotal())