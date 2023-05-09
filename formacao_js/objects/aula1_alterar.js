// sobre como alterar propriedades de um objeto em JS
const usuario = {
    nome: "Pedro",
    idade: 26,
    cpf: "12070305465",
    email: "pedro.viniciusacm@gmail.com",
    profissao: "desenvolvedor web",
    hobby: "fotografia"
};

// usuario.telefone = "(81) 992874343";
function insertPhone(tel) {
    usuario.telefone = tel;
    console.log(usuario);
}

insertPhone("81 992874343");