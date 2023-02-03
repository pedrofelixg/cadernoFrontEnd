const SALARIO = 675;

function comissao(qtdPecas) {
    if(qtdPecas <= 50) {
        console.log("o salário é R$ " + (SALARIO + (qtdPecas * 5)))
    } else if (qtdPecas > 50) {
        console.log("o salário é R$ " + (SALARIO + (qtdPecas * 7)))
    } else {
        console.log("O salário não pode ser calculado dessa maneira")
    }

};

comissao(610);

// o script faz parte de uma questão de matemática do ENEM 2022, a resolução simples usa uma função com parâmetro único em int.