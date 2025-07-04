import criarItem from "./services/item.js";
import * as servicoCarrinho from "./services/carrinho.js"

const carrinho = []
const listaDeDesejo = []


console.log("Bem-vindo ao carrinho de compras!");

const item1 = await criarItem("Peça de moto", 50.00, 3)
const item2 = await criarItem("Peça do carro", 80.00, 2)

await servicoCarrinho.addItem(carrinho, item1)
await servicoCarrinho.addItem(carrinho, item2)


console.log("Carrinho total é:")
await servicoCarrinho.calcularTotal(carrinho)

//console.log("Total dos itens do carrinho: ","\n",item2.subtotal(),"\n",item1.subtotal())