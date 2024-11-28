class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta:Conta) {
        super(nome, cpf, conta);
    }

    inserir(cliente: Cliente): void {
        this.dependentes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.dependentes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.dependentes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.dependentes.find(
            dependente => dependente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.dependentes;
    }
}
