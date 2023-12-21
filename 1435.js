//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//for (let indice = 0; indice < (lines.length - 1); indice++){
  //   let tamanhoMatriz = lines[indice]
    
     //console.log(criarMatriz(tamanhoMatriz))
//}

let matriz = [
    [ "1a", "1a", "1a", "1a", "1a" ],
    [ "1b", 3, 3, 3, "1b" ],
    [ "1c", 3, 3, 3, "1c" ],
    [ "1d", 3, 3, 3, "1d" ],
    [ "1e", "1e", "1e", "1e", "1e" ]
  ]

console.log(criarMatriz(5))

for (let indice = 0; indice < matriz.length; indice ++) {
    console.log(matriz[0][indice])
}
console.log("")

for (let indice = 0; indice < matriz.length; indice ++) {
    console.log(matriz[indice][0])
}
console.log("")

for (let indice = 0; indice < matriz.length; indice ++) {
    console.log(matriz[indice][matriz.length - 1])
}

console.log("")

for (let indice = 0; indice < matriz.length; indice ++) {
    console.log(matriz[matriz.length - 1][indice])
}

function criarMatriz(tamanho){
    let matriz = [[]]
    let vetor = []

    //monta o vetor com a quantidade de linhas
    for (linha = 0; linha < tamanho; linha++) {
        //monta o vetor com a quantidade de colunas
        for (coluna = 0; coluna < tamanho; coluna++) {
            vetor[coluna] = 1
        }

        matriz[linha] = vetor
    }

    return matriz
}



