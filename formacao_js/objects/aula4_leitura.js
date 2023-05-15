const dados = require("./aula4_sintaxe.json");

console.log(dados, typeof dados);

const jsonString = JSON.stringify(dados);
console.log(jsonString);
// retorno: typeof: string
// {"nome":"Reginaldo Lucas da Silva Pereira","anoDeIngresso":2021,"acesso":{"login":"pereirareginaldo","senha":"Laurindo21","email":"lucas_regigatinho@gmail.com","bloqueado":false},"endereco":{"rua":"Major Amauri Vespúcio","numero":135,"bairro":"Pedra do Amor","cep":"55845-000","complemento":"casa"}}

const objetoReginaldo = JSON.parse(jsonString);
console.log(objetoReginaldo);
// retorno:
// {
//     nome: 'Reginaldo Lucas da Silva Pereira',
//     anoDeIngresso: 2021,
//     acesso: {
//       login: 'pereirareginaldo',
//       senha: 'Laurindo21',
//       email: 'lucas_regigatinho@gmail.com',
//       bloqueado: false
//     },
//     endereco: {
//       rua: 'Major Amauri Vespúcio',
//       numero: 135,
//       bairro: 'Pedra do Amor',
//       cep: '55845-000',
//       complemento: 'casa'
//     }
//   } a montagem pode ser feita com qualquer string desde que anotada como um JSON