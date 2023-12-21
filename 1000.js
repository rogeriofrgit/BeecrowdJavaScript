const prompt = require("prompt-sync")()
const MASCARA_LETRA = "__"

main()

function main() {
    //TODO: codigo para ler a palavra secreta de um arquivo arquivo

    let palavraSecreta = "abacate"

    let tentativasRestantes = 6
    let letrasTentadas = ""
    let letraEscolhida

    do {  

        console.clear()
        console.log("Letras tentadas: " + letrasTentadas)
        console.log()
        console.log("Tentativas restantes: " + tentativasRestantes)
        console.log()
        console.log("Palavra secreta: " + retornarPalavraMascarada(palavraSecreta, letrasTentadas) )
        console.log()
        exibirForca(tentativasRestantes )
        console.log()
        letraEscolhida = obterTentativa()
        letrasTentadas += letraEscolhida

        //se a letra nao existir na palavra, atualiza a qtde de tentativa restantes
        if (!letraExisteNasLetrasTentadas(letraEscolhida, palavraSecreta)) {
            tentativasRestantes--
        }

    } while (tentativasRestantes > 0 ) 

    if (tentativasRestantes == 0 ) {
        console.clear()
        console.log("Você perdeu, tente novamente.")
        exibirForca(0)
    }
}

function retornarPalavraMascarada(palavraSecreta, letrasTentadas){
    let palavraMascarada = ""
    let letraDescoberta = false

    //pegar letra a letra da palavra secreta e descobrir se esta letra esta dentro das letras tentadas
    for (let posicao = 0; posicao < palavraSecreta.length; posicao++) { 
        let letraPalavraSecreta =  palavraSecreta.charAt(posicao) //obtem a letra da palavra secreta
    
        //verifica se a letra esta dentro das letras tentadas
        letraDescoberta = letraExisteNasLetrasTentadas(letraPalavraSecreta, letrasTentadas)
       
        //monta a palavra com as letras ja descobertas e __ nas letras que nao foram descobertas
        palavraMascarada += montarPalavraMascarada(letraDescoberta, letraPalavraSecreta)

    }

    return palavraMascarada
}

function montarPalavraMascarada(letraDescoberta, letraPalavraSecreta) {
    let palavraMascarada = ""
    //se a letra esta presente nas letras tentadas, imprime a letra ao inves de __
    if (letraDescoberta) {
        palavraMascarada = palavraMascarada + letraPalavraSecreta + "       "
    } else {
        palavraMascarada = palavraMascarada + MASCARA_LETRA + "       "
    }  

    return palavraMascarada
}

function letraExisteNasLetrasTentadas(letraPalavraSecreta, letrasTentadas){
    let letraDescoberta = false 
    //verifica se existe a letra da palavra secreta dentro da string letrasTentadas, se existir muda
    //o status da variavel de controle letraDescoberta para true e para o laço
    for (let indiceTentadas = 0; indiceTentadas < letrasTentadas.length; indiceTentadas++) { //pegar letra a letra da string letras tentadas
        if ( letraPalavraSecreta == letrasTentadas.charAt(indiceTentadas) ) {
            letraDescoberta = true
            //paramos o laço porque encontramos a letra
            //não é necessário continuar até o fim
            break
        } 
    }

    return letraDescoberta
}

function obterTentativa(){
    let opcao

    console.log(`Escolha a opção abaixo:
    1 - Digitar uma letra
    2 - Chutar a palavra
    `)
    
    do {
        opcao = Number(prompt("Digite a opção: "))

        if (opcao != 1 && opcao != 2) { //avaliar a possibilidade de nao repetir esta expressao duas vezes
            console.log("Opção digitada inválida!")
        }

    } while ( opcao != 1 && opcao != 2 ) //avaliar a possibilidade de nao repetir esta expressao novamente

    let resposta

    //obter a letra ou palavra do usuario de acordo com o codigo escolhido
    switch (opcao) {
        case 1:
            resposta = prompt("Digite a letra desejada: ")
            //TODO: temos a possibilidade do infeliz do usuário digitar mais de uma letra
            //precisamos tratar esta possibilidade, faça um teste para ver o que ocorre se ele
            //escolher a opção para digitar uma letra mas na verdade digitar uma palavra

            return resposta
            break
        case 2:
            resposta =  prompt("Digite a letra palavra desejada: ")
            //TODO: implementar o bloco de codigo necessário para verificar se ele acertou a palavra
            //se acertou ganhou o jogo, se errou perde o jogo
            break
    }
}

function exibirForca(estado) {
    switch (estado) {
        case 6:
            console.log(`
  +---+
  |   |
      |
      |
      |
      |
  ========= `)
        break
        case 5:
            console.log(`
  +---+
  |   |
  O   |
      |
      |
      |
  ========= `)
        break
        case 4:
            console.log(`
  +---+
  |   |
  O   |
  |   |
      |
      |
  ========= `)
        break
        case 3:
            console.log(`
  +---+
  |   |
  O   |
 /|   |
      |
      |
  ========= `)
        break
        case 2:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
  ========= `)
        break
        case 1:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
  ========= `)
        break
        case 0:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
  ========= `)
    }
}
//repetir varias vezes a leitura de uma letra ou uma palavra 
    // revelar a letrar acertada
    // repetir de novo este codigo




















//mostrar a palavra secreta de maneira oculta

//perguntar se o jogador quer tentar arriscar a palavra ou arriscar uma letra
    //se arriscar a palavra e nao acerta perde o jogo

    //se desejar tentar uma letra
        // se acerta a letra, apresenta a palavra secreta com as letras restante ocultas






/*
const prompt = require('prompt-sync')()

//utilizaremos a variavel contador para contar quantas vezes o divisor "cabe" dentro do dividendo
let contador = 0

console.clear()


let texto = prompt("Digite o seu codigo: ")

let dividendo =   eval( texto   ) 

console.log(dividendo)

let divisor =   Number(prompt("Digite o valor do divisor: "))

let resto = restoDivisaoInteira( dividendo , divisor) 

console.log(`O resto da divisao inteira entre ${dividendo} e ${divisor} é ${resto}`)



let 





function restoDivisaoInteira(dividendo, divisor) {
    let resto = dividendo
    let contador = 0

    while (resto >= divisor){
        resto = resto - divisor     //comando equivalente resto = (resto - divisor)
        contador += 1        //comando equivalente contador = (contador + 1)
    } 
    
    if (dividendo < divisor) {
        return -1
    } else {
        return resto
    }
}

*/