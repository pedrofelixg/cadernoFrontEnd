// sobre os tipos de dados no Objeto JS
const admins = {
    nome: "Jacqueline Bezerra",
    cargo: "Diretora",
    idade: 54,
    login: "jacquelinebc11",
    senha: "BoloChocolate36",
    email: "jacquelinebc96@gmail.com",
    telefone: [992844752, 994752215],
    bloqueado: false
}

console.log(admins.telefone); // [ 992844752, 994752215 ]
console.log(admins.telefone[1]); // 994752215

// objetos aceitam dados mais complexos como é o caso do array