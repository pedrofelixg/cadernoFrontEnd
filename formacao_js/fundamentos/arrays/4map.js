// map com números
const notas = [10, 9.5, 8, 7, 6];

const notasAtt = notas.map((nota) => {
    if(nota + 1 >= 10) {
        return nota = 10;
    } else {
        return nota + 1;
    }
})

console.log(notasAtt); // retorno [ 10, 10, 9, 8, 7 ]

// o método map() faz laço também, ideal para códigos consisos de alteração de itens do array.

// map com string
const alunos = ["ana Julia", "Caio vinicius", "BIA silva"];

const alunosUC = alunos.map((aluno) => {
    return aluno.toUpperCase();
})

console.log(alunosUC); // retorno [ 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA' ]