function dizimoOferta (salario, percentualAtual, callback){
    const dizimo = salario * 0.1;
    let oferta = salario * percentualAtual;

    callback = impressao(dizimo, oferta);
}

function impressao(dizimo, oferta){
    console.log(`Seu dízimo será no valor de ${dizimo.toFixed(2)}`);
    console.log(`Sua oferta está no valor de ${oferta.toFixed(2)}`);

    const devolucao = (dizimo + oferta).toFixed(2);
    console.log(`Devolvendo assim o valor de ${devolucao}`);
}

dizimoOferta(509.09, 0.02, impressao);

// retorno esperado:
// Seu dízimo será no valor de 50.91
// Sua oferta está no valor de 10.18
// Devolvendo assim o valor de 61.09