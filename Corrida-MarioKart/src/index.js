const player1 = {
    nome : "Mario",
    velocidade : 5,
    manobrabilidade : 3,
    poder : 3,
    ponto: 0
}

const player2 = {
    nome : "Luigi",
    velocidade : 3,
    manobrabilidade : 4,
    poder : 4,
    ponto: 0
}

const player3 = {
    nome : "Bowser",
    velocidade : 5,
    manobrabilidade : 2,
    poder : 5,
    ponto: 0
}


//Rolar dado 
async function rollDice(){
   return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch (true){
        case random < 0.33:
            result = "RETA"
            break
        case random < 0.66:
            result = "CURVA"
            break
        default:
            result = "CONFRONTO" 
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
    
    console.log(`${characterName}🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
} 
    

async function playRaceEngine(character1, character2){

    for (let round = 1; round <= 5; round++){
        console.log(`🏁Rodada ${round}`)

        //Sortear Bloco
        let block  = await getRandomBlock()
        console.log(`Bloco sorteado: ${block}`)

        //Rolar os Dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //Teste de Habilidade
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.velocidade
            totalTestSkill2 = diceResult2 + character2.velocidade

            await logRollResult(character1.nome, 
                "velocidade", 
                diceResult1,
                character1.velocidade)
            
            await logRollResult(character2.nome, 
                "velocidade", 
                diceResult2,
                character2.velocidade)
        }

        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.manobrabilidade
            totalTestSkill2 = diceResult2 + character2.manobrabilidade

            await logRollResult(character1.nome, 
                "manobrabilidade ", 
                diceResult1,
                character1.manobrabilidade)
            
            await logRollResult(character2.nome, 
                "manobrabilidade ", 
                diceResult2,
                character2.manobrabilidade)
        }

        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1+ character1.poder
            let powerResult2 = diceResult2+ character2.poder


            console.log(`${character1.nome} confrontou com ${character2.nome} 🥊`)

            await logRollResult(character1.nome, 
                "poder", 
                diceResult1,
                character1.poder)

                await logRollResult(character2.nome, 
                "poder", 
                diceResult2,
                character2.poder)

            if (powerResult1 > powerResult2) {
                console.log(`${character1.nome} Venceu o Confronto!🏆`)
                if (character2.ponto > 0) {
                    character2.ponto--
                    console.log(`${character2.nome} perdeu um ponto!`)
                } else {
                    console.log(`${character2.nome} já está com 0 pontos!`)
                }
            } else if (powerResult2 > powerResult1) {
                console.log(`${character2.nome} Venceu o Confronto!🏆`)
                if (character1.ponto > 0) {
                    character1.ponto--
                    console.log(`${character1.nome} perdeu um ponto!`)
                } else {
                    console.log(`${character1.nome} já está com 0 pontos!`)
                }
            } else {
                console.log("Empate, nenhum ponto foi perdido!")
            }

            
        }

        //Verificar quem marcou ponto
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.nome} marcou um ponto!`) 
            character1.ponto++
        }else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.nome} marcou um ponto!`) 
            character2.ponto++
        }   
        
        console.log("==================================================")
        
    }
}


async function declareWinner(character1, character2){
    console.log("Resultado final: ")
    console.log(`${character1.nome}: ${character1.ponto} ponto(s)`)
    console.log(`${character2.nome}: ${character2.ponto} ponto(s)`)

    if(character1.ponto > character2.ponto){
        console.log(`\n${character1.nome} VENCEU a corrida!`)
    } else if(character2.ponto > character1.ponto){
        console.log(`\n${character2.nome} VENCEU a corrida!`)
    } else(
        console.log(`\nCorrida terminou em empate!`)
    )
}

(async function main(){
    const dado = await rollDice()
    console.log(`Numero sorteado:`,dado , `\nCorrida entre ${player1.nome} e ${player2.nome} começando...`)
    
    
    await playRaceEngine(player1,player2)
    await declareWinner(player1,player2)
})() // <-- Isso torna a Função autoinvocavel

