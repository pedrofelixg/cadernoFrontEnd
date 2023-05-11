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

for (const chave in cliente) {
    if (Object.hasOwnProperty.call(cliente, chave)) {
        const element = cliente[chave];
        console.log(`a chave ${chave} tem o valor ${element}`);
    }
}

// retornos:
// em element:
// Paulo César Nogueira
// 36
// pcnogueira@gmail.com
// [ '81 996374512', '81 997212515' ]   
// [
//   {
//     rua: 'Manoel Salustiano Félix',  
//     numero: 24,
//     bairro: 'Dq. de Caixias',        
//     complemento: 'casa'
//   },
//   {
//     rua: 'Major Cecílio Bení',       
//     numero: 421,
//     bairro: 'Moagem',
//     complemento: 'Edíficio Comercial'
//   }
// ]

// na template string:
// a chave nome tem o valor Paulo César Nogueira
// a chave idade tem o valor 36
// a chave email tem o valor pcnogueira@gmail.com
// a chave telefones tem o valor 81 996374512,81 997212515
// a chave endereços tem o valor [object Object],[object Object]