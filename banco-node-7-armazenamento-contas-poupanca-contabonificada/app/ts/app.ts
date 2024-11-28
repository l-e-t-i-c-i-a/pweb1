let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const clientes = new Clientes();
const co1 = new Conta('1', 200);
const co2 = new Conta('2', 400);
const co3 = new Conta('3', 600);
const cli1 = new Cliente('Ana', '12345678901', co1 );
const cli2 = new Cliente('Bob', '12345678902', co2);
const cli3 = new Cliente('Carol', '12345678903', co3 );

console.log('Inserindo clientes');
clientes.inserir(cli1);
clientes.inserir(cli2);

console.log('Pesquisar: ' + cli1);
console.log(clientes.pesquisar("12345678901"));

console.log('Listar clientes: ');
console.log(clientes.listar());

console.log('Remover cliente: ' + cli3);
clientes.remover('12345678903');

console.log('Listar clientes: ');
console.log(clientes.listar());





