class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
    }
    inserir(cliente) {
        this.dependentes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.dependentes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.dependentes.find(dependente => dependente.cpf === cpf);
    }
    listar() {
        return this.dependentes;
    }
}
