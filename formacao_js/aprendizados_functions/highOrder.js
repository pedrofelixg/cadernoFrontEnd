const acesso = (nome) => {
    return `${nome} está logado com sucesso`;
}

const autentica = (cargo) => {
    let array = [];
    for(i = 0; i < cargo; i++){
        array.push(i)
    }
    return true;
}


const login = (nome, autentica) => {
    if(nome.cargo === "funcionário"){
        autentica(90000);
    } else if (nome.cargo === "diretoria") {
        autentica(900000);
    }
    return acesso(nome.nome);
}

console.log(login({cargo: `funcionário`, nome: `Han Solo`}, autentica));

// no JavaScript as funções também são valores que podem ser atribuídos a 
// variáveis e “passados para a frente”, algo que nem toda linguagem de programação faz.