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

//recebimento de objetos
const siepeContas = {
    reginaldo: {
        nome: "Reginaldo Lucas da Silva Pereira",
        login: "pereira.reginaldo",
        senha: "Laurindo21",
        anoIngresso: 2021,
        bloqueado: false
    },
    layla: {
        nome: "Layla Souza Lucena",
        login: "lucenalayla",
        senha: "Laurindo21",
        anoIngresso: 2021,
        bloqueado: false,
    },
    manoela: {
        nome: "Manoela Cássia de Moura Cunha",
        login: "cunha.manoela",
        senha: "Laurindo23",
        anoIngresso: 2023,
        bloqueado: true,
    }
};