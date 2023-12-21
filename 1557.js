console.log(removeEspacoFim("mesttra             "))

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

let ordem

let matriz = [[]]


while(true) {
    ordem = Number(lines.shift())

    if (ordem == 0) {
        break
    }
    
    //gerar os valores que serao utilizados como linhas
    for (let linha = 0; linha < ordem; linha++){
        let colunas = []
        //gerar os valores que serao utilizados como colunas
        for(let coluna = 0; coluna < ordem; coluna++){
            colunas[coluna] = identificarValorCelula(linha, coluna)
        }

        matriz[linha] = colunas
    }

    let maiorValor = matriz[ordem - 1][ordem - 1].toString().length

    for (let linha = 0; linha < ordem; linha++) {
        let textoLinha = '';
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            textoLinha += padRight(matriz[linha][coluna].toString(), " ", maiorValor) + ' ';
        }
        console.log(removeEspacoFim(textoLinha));
    }
    console.log();
} 


function identificarValorCelula(linha, coluna){
    return Math.pow(2, linha + coluna)
}

function padRight(str, caractere, qtde){
    let comprimentoTexto = strLength(str)
    let complemento = abs(comprimentoTexto - qtde)

    let novoStr = ""

    for(let i = 0; i < complemento; i++){
        novoStr += caractere
    }

    novoStr += str

    return novoStr
}

function strLength(str){
    let qtde

    let cont = 0
    while(str[cont] != undefined){
        cont++
    }

    return cont

}

function abs(valor){
    if (valor < 0) {
        return (valor * -1)
    } else {
        return valor
    }
}

function pow(base, expoente) {
    let acumulador = 1

    for(let i = 0; i < expoente; i++){
        acumulador = acumulador * base
    }

    return acumulador

}

function removeEspacoFim(str) {
    let i
    for(i = (strLength(str) - 1); i > 0; i--){
        if (str[i] != " ") {
            break
        }
    }

    let texto = ""

    for(let indice = 0; indice <= i; indice++){
        texto += str[indice]
    }

    return texto

}