

let valorInicial = 7

let matriz = [[]]

//monta linha
for(let linha = 0; linha < valorInicial; linha++){
    let vetor = []
    //monta coluna
    for(let coluna = 0; coluna < valorInicial; coluna++){
        vetor[coluna] = 1
    }
    matriz[linha] = vetor
}

console.log(matriz)

let camadas = parseInt(valorInicial / 2)

console.log(camadas)

//executar a quantidade de vezes para as camadas necessarias
for (let camada = 1; camada <= camadas; camada++) {

    for (let linha = camada; linha < (matriz.length - camada); linha++){
        for(let coluna = camada; coluna < (matriz.length - camada); coluna++){
            matriz[linha][coluna] = (camada + 1)
        }
    }

}

console.log(matriz)

