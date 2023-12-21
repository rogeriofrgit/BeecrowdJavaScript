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
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor1 = lines.shift(); 
let valor2 = lines.shift(); 
let valor3 = lines.shift(); 
let valor4 = lines.shift(); 
let valor5 = lines.shift(); 

valor1 = Number(valor1);
valor2 = Number(valor2);
valor3 = Number(valor3);
valor4 = Number(valor4);
valor5 = Number(valor5);

let qtde = 0

qtde = qtde + ehPar(valor1);
qtde = qtde + ehPar(valor2);
qtde = qtde + ehPar(valor3);
qtde = qtde + ehPar(valor4);
qtde = qtde + ehPar(valor5);

function ehPar(valor){
    if ((valor % 2) == 0 ) {
        //qtde = qtde + 1;
        //qtde += 1;
        qtde++;
        return 1
    }
    return 0
}

console.log(qtde + " valores pares")
