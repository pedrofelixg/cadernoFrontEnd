const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element);
}

// entendendo o for explicado pra ameba que sou:
    // a let i recebe o valor que será iterado, em i++ que basicamente é o resumo para índice/index
    // essa let terá a repetição através da condição true presente no segundo parâmetro da função for.
    // enquanto a condição for true o código do colchetes {} será executado.
// o for não é executado apenas para arrays

const nomes = [
    "Alexya",
    "Renato",
    "Bruna",
    "Sérgio",
    "Glória",
    "Felipe"
]

for(let index = 0; index <= nomes.length; index++){
    console.log(nomes[index]);
}

// o retorno:
// Alexya
// Renato
// Bruna
// Sérgio
// Glória
// Felipe
// undefined <- esse valor ao final só aparece pq na condição de loop usei <= (menor ou igual)
        // em outras palavras a condição vai até o númmero do tamanho do array que é sempre +1 do número de índices.

const minhasNotas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for(let index = 0; index < minhasNotas.length; index++){
    somaDasNotas += minhasNotas[index];
}
console.log(somaDasNotas / minhasNotas.length);

//exercício de for com matrizes

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];
let mediaMatricial = 0;

for(let ind=0; ind < notasGerais.length; ind++){
    for(let j=0; j < notasGerais[ind]; j++) {
        mediaMatricial += notasGerais[ind][j]/notasGerais[ind].length;
    }
}
mediaMatricial = mediaMatricial/notasGerais.length
console.log(mediaMatricial);