const clientes = require("./aula5_clientes.json");
console.log(typeof clientes);

// método for...in
// for (const dados in clientes) {
//     if (Object.hasOwnProperty.call(clientes, dados)) {
//         const dado = clientes[dados];
//         console.log(dado);
//     }
// };

// encontrar objeto.
function encontrar(objeto, chave, valor) {
    return objeto.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado);

// filtrando objetos

function filterNoComplements(lista) {
    return lista.filter((cliente) => {
        return (cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const clientesFiltrados = filterNoComplements(clientes);
console.log(clientesFiltrados);

//ordenando
function ordenamento(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) {
            return -1;
        }
        if(a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    })

    return resultado;
}

const ordenadoPorNome = ordenamento(clientes, "nome");
console.log(ordenadoPorNome);