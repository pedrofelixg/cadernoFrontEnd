const notas = [7, 7, 8, 9];

const novasNotas = [...notas];
//                 sintaxe de espalhamento para não vincular os arrays nos endereços da memória.

novasNotas.push(10);

console.log(notas);
console.log(novasNotas);