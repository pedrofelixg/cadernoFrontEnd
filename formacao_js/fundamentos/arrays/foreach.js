// aula 5 funções callback
const notas = [10, 6.5, 8, 9.5];
let soma = 0;
notas.forEach((nota)=>{
    soma += nota;
});
let media = soma / notas.length;
console.log(soma);
console.log(`A média das notas do Array é ${media}.`);

const nomes = [
    "Suzana",
    "Thiago",
    "Cecilia",
    "Pedro",
    "Myllene"
]
nomes.forEach((nome) =>{
    console.log(nome,nome.length)
})

// "nome" acaba sendo uma variável criada pela lógica do forEach