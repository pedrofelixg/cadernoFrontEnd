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

// extra
const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
        return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
        console.log(this.nome)
    }
}

for (let info in paciente) {
    let dados = "";
    if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
        continue
    } else {
        console.log(dados += `${info} ==> ${paciente[info]}`);
    }
}

// retorno do for:
// nome ==> James T.
// idade ==> 30
// email ==> jt@email.com
// identicacao ==> Alpha01259859
// funcao ==> comandante
// peso ==> 80.1
// altura ==> 1.8