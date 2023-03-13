// projeto de notas de um aluno

let notasPedro = [10, 6.5, 8, 7.5];

console.table(notasPedro);
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   10   │
// │    1    │  6.5   │
// │    2    │   8    │
// │    3    │  7.5   │
// └─────────┴────────┘

const mediaPedro = (notasPedro[0] + notasPedro[1] + notasPedro[2] + notasPedro[3]) / notasPedro.length;
console.log(`a média de Pedro é ${mediaPedro}`)

// fazendo lógica com mais de um tipo de dado

const alunosReforço = [
    [nome = "Helena", idade = 12],
    [nome = "João Victor", idade = 11],
    [nome = "Marcelo", idade = 12]
]

console.table(alunosReforço)
// retorno
// ┌─────────┬───────────────┬────┐
// │ (index) │       0       │ 1  │
// ├─────────┼───────────────┼────┤
// │    0    │   'Helena'    │ 12 │
// │    1    │ 'João Victor' │ 11 │
// │    2    │   'Marcelo'   │ 12 │
// └─────────┴───────────────┴────┘