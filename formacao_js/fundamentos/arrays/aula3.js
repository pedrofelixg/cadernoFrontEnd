// manipulando arrays com slice()

const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "André",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo"
];

console.log(alunos.length);

const alunosDividos1 = alunos.slice(0, 10);
const alunosDividos2 = alunos.slice(10); // como vai até o final não precisa do segundo parâmetro
//não altera o array original, e recebe como parâmetros o índice de abertura e o número após onde queremos tirar, tipo 10-1 = 9

console.log(alunosDividos1);
console.log(alunosDividos2);

// ideal é substituir o número do index por uma variável que dinamize esse processo.

// alterações com o método splice()
const turma6A = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

turma6A.splice(1, 2, "Rodrigo");

// altera o array original e pode funcionar com dois ou três parâmetros

console.log(turma6A);

const aquario = ["baleia", "lula", "golfinho", "tubarao"];

aquario.splice(1, 0, "peixinho");
aquario.splice(3, 2, "peixe azul");
console.log(aquario);