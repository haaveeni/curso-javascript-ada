const prompt = require('readline-sync')

const idade = prompt.question("Qual é a sua idade?");
//na pergunta, nao pode usar só prompt, tem que usar o nome da biblioteca com .question

const idadeNumber = Number(idade)
//prompt (no browser e no terminal) leem a resposta sempre como string
//coercao de tipos, implicita ou explicita (automatica ou manual)
//Number() faz a coerção do dado pra número

console.log(idadeNumber, typeof idadeNumber);

//ao tentar rodar no terminal, dará esse erro, pq não tem window no nodejs
// const idade = prompt("Qual é a sua idade?");
//               ^
// ReferenceError: prompt is not defined

//instalar biblioteca readline-sync que pega dados do usuário

//a instalação criou a pasta node_modules, package.json e package-lock.json
//package.json serve pra mostrar quais as bibliotecas que estão instaladas no seu projeto
//package-lock.json serve pra você ter controle das versões das dependências que você instalou

//depois disso, você precisa carregar a biblioteca no seu arquivo js usando require, uma palavra reservada do js pra importação de biblioteca

//coercoes explicitas, manuais:
console.log(Number('X'))
//tipagem fraca, não dá erro, só retorna NaN (Not a Number)

console.log(String(10), typeof String(10))
//retorna 10 string

console.log(Boolean(1))
//retorna true
//só vai retornar false com 0
//se colocar letra, retorna ReferenceError: A is not defined

//coercao implicita, automatica
console.log(1 + '1') //retorna 11 (somou um numero com um texto, fez uma concatenação)
//o simbolo + pode fazer soma e concatenação
console.log(10 - '5')//retorna 5, pq a subtração, assim como todos os outros operadores (exceto +), forçam uma coercão de texto pra numero
console.log(10 * '5')//retorna 50
console.log(10 / '5')//retorna 2

//Qual será a saída?
let n = 1 + '1' //11 string
n = n - 1 //10 number
console.log(n, typeof n) //10 number

//Qual será a saída?
console.log(2 + 3 + 4 + '5') //95 string
console.log(typeof (2 + 3 + 4 + '5'))//string

//Qual será a saída?
console.log('5' + 2 + 3 + 4) //5234 string
console.log(typeof ('5' + 2 + 3 + 4))//string

//Qual será a saída?
console.log('10' - '4' - '3' - 2 + '5') //15 string
console.log(typeof ('10' - '4' - '3' - 2 + '5'))//string