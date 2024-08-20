//Operadores booleanos - comparações

// = atribuição (NÃO É OPERADOR BOOLEANO)

// == compara igualdade, não é boa prática
const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); //false, os numeros são diferentes
console.log(typeof (numero1) == typeof (numero2))//true, os tipos das variáveis são iguais

console.log(numero1 == '10'); //true porque o valor é o mesmo

// === compara igualdade de tipo E valor, boa prática
console.log(numero1 === '10'); //false porque apesar de o valor ser igual, o tipo é diferente, um é number e outro string

// != diferente em valor
console.log(10 != '10'); //false, ele entende que os dois valores são iguais

// != diferente em valor e tipo
console.log(10 !== '10') //true, os valores são iguais, mas os tipos são diferentes

// < menor
console.log(numero1 < numero2); //true, 10 é menor que 12

// > maior
console.log(numero1 < numero2); //false, 10 é menor que 12

// <= menor ou igual
console.log(17 <= 18); //true, 17 é menor que 18

// >= maior ou igual
console.log(18 >= 17); //true, 18 é maior que 17

//and, e, conjunção &&
const idadePessoa1 = 34
const idadePessoa2 = 19

console.log(idadePessoa1 && idadePessoa2 >= 18)

const idadePessoa3 = 19
const idadePessoa4 = 15

console.log(idadePessoa3 && idadePessoa4 >= 18) //false pq a idade da pessoa 4 é menor de 18

//or, ou, ||
console.log(idadePessoa3 >= 18 || idadePessoa4 >= 18) //verdadeiro, pq pelo menos uma é maior ou igual a 18

// negação, inversão !

console.log(!true) //retorna false
console.log(!false) //retorna true

console.log(idadePessoa4 >= 18) //false
console.log(!(idadePessoa4 >= 18)) //true
