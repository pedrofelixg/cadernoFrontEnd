// operacao do MDN 
values = [];
for (let x = 0; x < 10; x++) {
    values.push([
        2 ** x, 2* x ** 2
    ])
};

console.table(values);

// adição de elementos

let notaEmFalta = [10, 6, 8];
notaEmFalta.push(7);

// método push empurra um valor novo.

console.log(notaEmFalta);

// eliminação de valor
const notas = [10, 6, 8, 5.5, 10];
notas.pop();

console.log(notas);

// o método pop() não retorna erro se eu passar um parâmetro nele, ele simplesmente remove.

const array1 = ["milho", "ervilha", "lentilhas"];
const array2 = ["abacate", "manga", "mel"];

const arrayConcat = [];
console.log(arrayConcat.concat(array1, array2))

const numeros = [5, 12, 8, 130, 44];
const found = numeros.find(element => element > 10);

console.log(found)

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50);
console.log(arrayVazia);
console.log(arrayVazia.length);

// retorno:
// 3
// [ <3 empty items>, 50 ]
// 4   -> isso se chama "Array Esparço"