// ESTRUTURAS DE CONTROLE DE FLUXO

//IF/ELSE

//mudar ordem de execução

//estrutura condicional
//se for verdadeiro, executa um trecho do código
//se for falso, executa outro trecho

const prompt = require('readline-sync')


//Estrutura condicional if/else
const idade = Number(prompt.question('Qual a sua idade?'))
const ehMaiorDeIdade = idade >= 18

if (ehMaiorDeIdade) {
  console.log("Você é maior de idade")
} else {
  console.log("Você é menor de idade")
}

//Exemplo 2
//Regras de negócio
//Média >= 7 -> Aprovado!
//Média >= 5 -> Prova final
//Média < 5 -> Reprovado!

const mediaDoAluno = 4
const media = 7

if (mediaDoAluno >= media) {
  console.log("Aprovado!")
} else if (mediaDoAluno >= 5) {
  console.log("Prova final!")
} else {
  console.log("Reprovado!")
}

//Exemplo 3
//Você pode dirigir?
//Precisa ser maior de idade
//Precisa ter CNH ou PPD

const idadeDaPessoa = 18
const temCNH = false

if (idadeDaPessoa >= 18 && temCNH) {
  console.log("Você pode dirigir")
} else {
  console.log("Você NÃO pode dirigir")
}
