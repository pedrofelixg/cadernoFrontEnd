const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);

// o método filter reduz e muito a quantidade de código para fazer um filtro em um array de duas dimensões
// a lógica do filter é sempre retornar um booleano, seja true ou false