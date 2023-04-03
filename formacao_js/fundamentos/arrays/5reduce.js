const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia (sala) {
    const somasSalas = sala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const medias = somasSalas / sala.length;

    console.log(`a média da sala é ${medias}.`); 
}

calculaMedia(salaJS); // soma = 67.5 | média = 7.5
calculaMedia(salaJava); // soma = 39 | média = 6.5
calculaMedia(salaPython); // soma = 28 | média = 7