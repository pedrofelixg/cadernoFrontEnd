// tipos de conversão

// conversão implícita
/* não implica erro e converte um tipo de dado em outro
        comum na ideia de number e string */

let numero = 40;
let nome = "40";

console.log(numero === nome); //false
console.log(numero == nome); //true pq compara o valor isso permite a concatenção caso use o operador (+)

console.log(numero + nome); // 4040 <- resposta

// a conversão implicita sempre tornar o int em str


// conversão explicita
// quando a conversão é feita por funções específicas do JS

console.log(numero + Number(nome)); //80
console.log(String(numero));