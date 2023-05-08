const usuario = {
    nome: "Pedro",
    idade: 26,
    cpf: "12070305465",
    email: "pedro.viniciusacm@gmail.com",
    profissao: "desenvolvedor web",
    hobby: "fotografia"
};

const chaves = [
    "nome",
    "idade",
    "cpf",
    "email",
    "profissao",
    "hobby"
];

chaves.forEach( (chave) => {
    console.log(`a chave ${chave} tem como valor ${usuario[chave]}`);
} );
// retorno:
//     a chave nome tem como valor Pedro
//     a chave idade tem como valor 26
//     a chave cpf tem como valor 12070305465
//     a chave email tem como valor pedro.viniciusacm@gmail.com
//     a chave profissao tem como valor desenvolvedor web      
//     a chave hobby tem como valor fotografia


// caso passe uma chave inválida:
const chaves2 = ["nome", "idade", "cnpj", "email"];
chaves2.forEach((chave2) => {
    console.log(`a chave ${chave2} tem como valor ${usuario[chave2]}`);
});

// retorno:
//     a chave nome tem como valor Pedro
//     a chave idade tem como valor 26
//     a chave cnpj tem como valor undefined <- caso a chave não corresponda, volta o valor undefined.
//     a chave email tem como valor pedro.viniciusacm@gmail.com