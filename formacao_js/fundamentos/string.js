// UTF-8 Test
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//como os códigos do UTF são lidos em Javascript

// declrações simples
const meuNome = "Pedro Gonçalves e tenho ";
const minhaSenha = "Orion9pe@";
const idade = "25 anos";

//concatenação simples (+)
console.log(meuNome + idade);

// template strings
console.log(`Olá meu nome é ${meuNome} ${idade}, geralmente uso a senha '${minhaSenha}' nos meus apps`)

