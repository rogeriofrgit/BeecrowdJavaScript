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

let valores = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////
//let [n1, n2, n3, n4] = valores.shift().split(" ");
let totalSegundos = valores.shift();


let horas
let minutos
let segundos
let fracaoResto

horas = parseInt(totalSegundos / 3600)
fracaoResto = (totalSegundos % 3600)

minutos = parseInt(fracaoResto / 60)
fracaoResto = (fracaoResto % 60)
segundos = fracaoResto

console.log(horas + ":" + minutos + ":" + segundos)
