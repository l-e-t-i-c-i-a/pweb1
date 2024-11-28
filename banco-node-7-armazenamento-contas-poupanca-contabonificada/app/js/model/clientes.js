class Clientes {
    constructor() {
        this.clientes = new Array();
        //const co1 = new Conta('1', 200);
        //const co2 = new Conta('2', 400);
        //const cl1 = new Cliente('Ana', '12345678901', co1 );
        //const cl2 = new Cliente('Bob', '12345678902', co2 );
        //this.clientes.push(cl1, cl2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
