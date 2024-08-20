const prompt = require('readline-sync')

prompt.question("")

//SWITCH-CASE - chaveamento
//Muito útil quando sua variável possui valores específicos

const permissoes = "aluno" // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case 'aluno':
    console.log("Você só pode visualizar as aulas");
    break
  case 'professor':
    console.log("Você pode alterar as aulas e adicionar exercícios");
    break
  case 'admin':
    console.log("Você pode fazer tudo no sistema!")
}