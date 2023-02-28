function ganhoPorHora(salario, horasTrabalhadas){
    const salarioHora = (salario / horasTrabalhadas);
    const TOTAL = salarioHora.toFixed(2);
    return TOTAL;
}

// o toFixed() é uma função de arrendondamento das casas decimais, o parâmetro 2 define a qtds de casas.

console.log(ganhoPorHora(4500, 176));
console.log(`o ganho por hora do funcionário é ${ganhoPorHora(4500, 176)}.`);

//teste de numbers no JS

const idade = 12;
const anosDepois = "24";

console.log(idade+anosDepois); //resultado 1224 o JS Concatena os dois valores como str.