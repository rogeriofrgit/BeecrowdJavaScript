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

let lines = conteudoArquivo.trim().split(quebraLinhaWindows);

let ordem

let matriz = [[]]

//para cada valor enviado pelo beecrowd 
//construa a matriz

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

    for (let i = 0; i < ordem; i++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j].toString().padStart(3, ' ') + ' ';
        }
        console.log(linha.trimRight());
    }
    console.log();
} 


function identificarValorCelula(linha, coluna){
    return Math.abs(linha - coluna) + 1
}
