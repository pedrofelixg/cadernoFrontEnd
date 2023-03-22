const estudantes = [
    "João", "Juliana", "Ana", "Caio"
];

const mediasEstudantes = [
    10, 8, 7.5, 9
];

const estudantesMedias = [estudantes, mediasEstudantes];

function nomeNota(aluno) {
    if (estudantesMedias[0].includes(aluno)) {
        console.log(`localizei o estudente ${aluno}`);
        const indice = estudantesMedias[0].indexOf(aluno);
        const mediaDoAluno = estudantesMedias[1][indice];

        console.log(`a media de ${aluno} é ${mediaDoAluno}`);
    } else {
        console.log(`não localizei o estudante ${aluno}`);
    }
}

// pensei que usaria um forEach
// ideal nomear as referências dos arrays

// aqui a ideia é: desestruturar o array em duas variáveis já indexadas, e tornar o código mais legível.

function alunosNotas(aluno) {
    const [alunos, medias] = estudantesMedias; //ECMAScript 6
    // é igual à:
    //     const alunos = estudantesMedias[0];
    //     const medias = estudantesMedias[1];

    if (alunos.includes(aluno)) {
        const indice = alunos.indexOf(aluno);
        const mediaDoEstudante = medias[indice];

        console.log(`${aluno} está na lista e tem média ${mediaDoEstudante}`);
    } else {
        console.log(`${aluno} não foi encontrado`);
    }
}

nomeNota("Felipe");
alunosNotas("João"); // ambas as funções tem o mesmo propósito, mas, com legibilidade diferente.