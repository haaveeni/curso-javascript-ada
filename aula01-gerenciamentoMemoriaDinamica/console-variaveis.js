console.log("Hello World!");

// Declaração e atribuição de variáveis
const nome = "Veridiana Lucena"; //String, usar aspas (simples ou duplas)
let idade = 34; //Número, não usar aspas
let altura = 1.58; //Número (JS não diferencia integer de float), usar ponto para separar as casas decimais
let estudando = true; //Booleano (true/false)

// Console.log()
console.log(nome, typeof nome); // Imprime a variável e seu tipo

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

// Variáveis declaradas sem atribuição são undefined
let semConteudo; // Declarando variável sem atribuição
console.log(semConteudo) //undefined
console.log(typeof semConteudo) //undefined

// É possível declarar mais de uma variável em uma mesma linha
let curso = "Front End em React", topico = "JavaScript Básico I";
// É possível imprimir mais de uma variável na mesma linha
console.log(curso, topico)

// HOIST E ESCOPO GLOBAL
// Não use var, use let (let it change) ou const (constant)
// Var é uma variável global, podendo ser utilizada em qualquer lugar do seu código
// Var existe antes de ser declarada, se você fizer um console.log dela antes de sua declaração, não dará erro, e sim: undefined (Hoist)
// Com o let, isso não acontece, pois ele só existe dentro do seu escopo. Se você fizer um console.log dela antes de sua declaração, dará esse erro: ReferenceError: notaDoAluno is not defined

// Trocando atribuição de let e const
let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9; // É permitido alterar o valor de um let
mediaDoAluno = 7; // Não é permitido alterar o valor de uma constante

console.log(notaDoAluno);
console.log(mediaDoAluno); // TypeError: Assignment to constant variable.
