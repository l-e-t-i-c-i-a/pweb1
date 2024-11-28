class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputContaNumero: HTMLInputElement;
    private inputContaSaldo: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputContaNumero =
            <HTMLInputElement>document.querySelector("#contaNumero");
        this.inputContaSaldo = <HTMLInputElement>document.querySelector("#contaSaldo");

        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();

        const nome = this.inputNome.value;
        const cpf = this.inputCpf.value;
        const numeroConta = this.inputContaNumero.value;
        const saldoConta = parseFloat(this.inputContaSaldo.value);

        const novaConta = new Conta(numeroConta, saldoConta);

        let novoCliente = new Cliente(nome,
            cpf, novaConta);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);

        this.limparFormulario();
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    limparFormulario() {
        this.inputNome.value = '';
        this.inputCpf.value = '';
        this.inputContaNumero.value = '';
        this.inputContaSaldo.value = '';
    }


}
