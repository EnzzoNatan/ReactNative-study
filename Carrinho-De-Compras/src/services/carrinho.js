//Ações do carrinho 

//CASOS DE USO
// adicionar item no carrinho✅
async function addItem(usuarioCarrinho, item){
    usuarioCarrinho.push(item)
}

//calcular o valor total✅
async function calcularTotal(usuarioCarrinho){
    const resultado = usuarioCarrinho.reduce((total,item) => total + item.subtotal(),0)
    console.log(resultado)
}

//deletar item do carrinho
async function deleteItem(usuarioCarrinho, nome){
    const indnex = usuarioCarrinho.findIndex((item) => item.nome === nome)

    if(index !== -1){
        usuarioCarrinho.splice(index, 1)
    }

}

//remover item do carrinho
async function removeItem(usuarioCarrinho, index){
    
}



export{
    addItem,
    deleteItem,
    removeItem,
    calcularTotal
}