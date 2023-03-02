// sintaxe das funções e seus usos

// declaração padrão
function teste() {
    // O NOME É IMPORTANTE
    let idadePedro = 26
    let anoNascimento = 1997;
    let anoAtual = 2023;

    if(anoAtual - idadePedro === anoNascimento){
        console.log("Sim Pedro nasceu em 1997")
    } else {
        console.log("Não, Pedro não nasceu em 1997")
    }
}

teste()

// parametros

function calculoParametro(num1, num2){
    console.log(num1 + num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log((num1 * num2) / (num1 + num2));
}

calculoParametro(26, 23);
// reaproveitamento de código com parâmetros.


//expressão de funções alternativas
// -> por variável, função anônima
const somaVar = function(num1, num2) {return num1 + num2};
console.log(somaVar(3, 8));

/* :warning: funções anônimas estão presas à variáveis e podem ter subscrição,
    pode gerar dificuldades de leitura do código
    e essas funções não podem ser chamadas antes do trecho de código*/

// -> ArrowFuction
const apresentaNome = nome => `meu nome é ${nome}`;
console.log(apresentaNome("Pedro"));

let soma = (num1, num2) => `a soma é ${num1 + num2}`;
console.log(soma(3, 8));

const somaSimples = (num1, num2, num3) => {
    return `a soma é ${num1 + num2 + num3}`;
}
console.log(somaSimples(1, 2, 3))

/*
a arrowFunction não aceita return dentro da unica linha do código.
não pode ser nomeada e tem que estar dentro de uma const.
a arrowFunction vai ser melhor utilizada no processamento de objetos.
*/
