const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for (let nota of notas) {
    soma += nota;
}

console.log(soma);
media = soma / notas.length;

console.log(`a média é ${media}`)

//ideal para percorrer o array e exibir seus valores.