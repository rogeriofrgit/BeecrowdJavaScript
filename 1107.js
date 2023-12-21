const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

let valorA = parseInt(lines[0]);
let valorB = parseInt(lines[1]);
let valorC = parseInt(lines[2]);
let valorD = parseInt(lines[3]);

console.log("DIFERENCA = " + ((valorA * valorB  ) - (valorC * valorD) ))