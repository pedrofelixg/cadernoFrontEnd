// implementação de funções nas propriedades de um objeto.
const cliente = {
    nome: "Paulo César Nogueira",
    idade: 36,
    email: "pcnogueira@gmail.com",
    telefones: ["81 996374512", "81 997212515"],
    saldo: 200,
    deposito: function(deposito){
        console.log(deposito + this.saldo);
        return this.saldo;
    },
    efetuaPagamento: function (valor) {
        if(valor > this.saldo) {
            console.log("Compra não autorizada, saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.deposito(500);
cliente.efetuaPagamento(10);