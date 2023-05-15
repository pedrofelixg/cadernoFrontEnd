// sintaxe de espalhamento
const cliente = {
    nome: "Paulo César Nogueira",
    idade: 36,
    email: "pcnogueira@gmail.com",
    telefones: ["81 996374512", "81 997212515"],
    endereços: [
        {
            rua: "Manoel Salustiano Félix",
            numero: 24,
            bairro: "Dq. de Caixias",
            complemento: "casa",
        },
        {
            rua: "Major Cecílio Bení",
            numero: 421,
            bairro: "Moagem",
            complemento: "Edíficio Comercial"
        }
    ]
};

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

ligaParaCliente(...cliente.telefones);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereços[0]
};

console.log(encomenda);

// cuidados com o operador de espalhamento caso a junção de objetos tenha propriedades com nomes iguais. exemplo:
const ninjaFolha = {
    nome: "Naruto Uzumaki",
    aldeia: "Folha",
}

const ninjaNevoa = {
    nome: "Kisame Hochigake",
    aldeia: "Névoa",
}

const ninjaAreia = {
    nome: "Gaara Kazekage",
    aldeia: "Areia",
}

const ninjas = {...ninjaFolha, ...ninjaNevoa, ...ninjaAreia};
console.log(ninjas);
// retorno: { nome: 'Gaara Kazekage', aldeia: 'Areia' } é a subscrição do valor da propriedada
