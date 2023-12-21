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

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////

let valor = ""
let vetor = []
for (let i = 0; i < conteudoArquivo.length; i++) {
    let caractere = conteudoArquivo[i];
    if (caractere != " " && caractere != "\r" && caractere != "\n"){
        valor += caractere;
    } else if ((caractere == " " || caractere == "\n") && caractere != "\r"){
        vetor.push(Number(valor))
        valor = ""
    }
}
console.log(vetor)


/*
let [n1, n2, n3, n4] = lines.shift().split(" ");
let notaExame = lines.shift().split(" ");





let mediaPonderada = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

console.log("Media: " + mediaPonderada.toFixed(1));

if (alunoAprovado(mediaPonderada)){
    console.log("Aluno aprovado.");
} else if(alunoReprovado(mediaPonderada)){
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + parseFloat(notaExame).toFixed(1));
    
    let media = (mediaPonderada + parseFloat(notaExame)) / 2;
    
    console.log(alunoAprovado(media) ? "Aluno aprovado." : "Aluno reprovado."   );
    console.log("Media final: " + media.toFixed(1));
}


function alunoAprovado(nota) {
    return (analisarIntervalo(nota,7,11))
}

function alunoRecuperacao(nota) {
    return (analisarIntervalo(nota,5,6))
}

function alunoReprovado(nota) {
    return (analisarIntervalo(nota,0,5))
}

function analisarIntervalo(valor, inicio, termino){
    return (valor >= inicio && valor < termino)
}

*/