//Ações do carrinho 

//CASOS DE USO
// adicionar item no carrinho✅
async function addItem(usuarioCarrinho, item){
    const index = usuarioCarrinho.findIndex((p) => p.nome === item.nome)
    if(index !== -1){
        usuarioCarrinho[index].quantidade += item.quantidade
    } else {
        // Cria uma cópia do item e garante que subtotal sempre reflita a quantidade atual
        usuarioCarrinho.push({
            ...item,
            subtotal() {
                return this.preco * this.quantidade;
            }
        });
    }
}

//calcular o valor total✅
async function calcularTotal(usuarioCarrinho){
    console.log("VALOR TOTAL DO CARRINHO: ")
    const resultado = usuarioCarrinho.reduce((total,item) => total + item.subtotal(),0)
    console.log(`Total R$ ${resultado}`)
}

//deletar item do carrinho✅
async function deleteItem(usuarioCarrinho, nome){
    const index = usuarioCarrinho.findIndex((item) => item.nome === nome)

    if(index !== -1){
        usuarioCarrinho.splice(index, 1)
    }

}

//Visualizar itens do carrinho✅
async function verCarrinho(usuarioCarrinho){
    console.log("LISTA DE COMPRAS: ")
    usuarioCarrinho.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - Preço: R$ ${item.preco} | Quantidade: ${item.quantidade} | Subtotal: R$ ${item.subtotal()}`)
    })
}

//remover item do carrinho✅
async function removeItem(usuarioCarrinho, item){   
    const indexId = usuarioCarrinho.findIndex((p) => p.nome === item.nome)
    if(indexId === -1){
        console.log("ITEM NÃO ENCONTRADO")
        return
    }

    if (usuarioCarrinho[indexId].quantidade > 1) {
        usuarioCarrinho[indexId].quantidade -= 1
        return
    }

    // Se a quantidade for 1, ao remover, deve excluir o item do carrinho
    if(usuarioCarrinho[indexId].quantidade === 1){
        usuarioCarrinho.splice(indexId, 1)
        return
    }
}



export{
    addItem,
    deleteItem,
    removeItem,
    calcularTotal,
    verCarrinho
}