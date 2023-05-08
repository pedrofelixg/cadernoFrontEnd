const usuario = {
    nome: "Pedro",
    idade: 26,
    cpf: "12070305465"
}

// sintaxe básica do objeto.

console.log(usuario.nome, usuario.cpf);
console.log(`o usuário ${usuario.nome} possui o cpf nº ${usuario.cpf}`);
console.log(`os três primeiros digitos do cpf do usário ${usuario.nome} são ${usuario.cpf.substring(0,3)}`);