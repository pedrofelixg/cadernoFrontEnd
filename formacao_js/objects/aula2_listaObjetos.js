//lista de Objetos (Array + Object)
const cliente = {
    nome: "Paulo César Nogueira",
    idade: 36,
    email: "pcnogueira@gmail.com",
    telefones: ["81 996374512", "81 997212515"]
};

cliente.endereços = [
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
];

cliente.endereços.push({
    rua: "Paulo de Tarso",
    numero: 427,
    bairro: "Ladislau Pinho",
    complemento: "Armazém"
})

// com o uso do array no objeto JS é possível usar métodos de manipulação de Arrays.

console.log(cliente);

// retorno:
// {
//     nome: 'Paulo César Nogueira',
//     idade: 36,
//     email: 'pcnogueira@gmail.com',
//     telefones: [ '81 996374512', '81 997212515' ],
//     'endereços': [
//       {
//         rua: 'Manoel Salustiano Félix',
//         numero: 24,
//         bairro: 'Dq. de Caixias',
//         complemento: 'casa'
//       },
//       {
//         rua: 'Major Cecílio Bení',
//         numero: 421,
//         bairro: 'Moagem',
//         complemento: 'Edíficio Comercial'
//       },
//       {
//         rua: 'Paulo de Tarso',
//         numero: 427,
//         bairro: 'Ladislau Pinho',
//         complemento: 'Armazém'
//       }
//     ]
// }