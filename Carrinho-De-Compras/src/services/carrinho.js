//Ações do carrinho 

//CASOS DE USO
// adicionar item no carrinho✅
async function addItem(usuarioCarrinho, item){
    usuarioCarrinho.push(item)
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

async function verCarrinho(usuarioCarrinho){
    console.log("LISTA DE COMPRAS: ")
    usuarioCarrinho.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - R$ ${item.preco} x ${item.quantidade} = R$ ${item.subtotal()}`)
    })
}

//remover item do carrinho
async function removeItem(usuarioCarrinho, index){
    
}



export{
    addItem,
    deleteItem,
    removeItem,
    calcularTotal,
    verCarrinho
}