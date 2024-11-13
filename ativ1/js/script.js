const usuarios = [
    { nome: 'Ana', idade: 25, cpf: '123.456.789-00' },
    { nome: 'Carla', idade: 30, cpf: '987.654.321-11' },
    { nome: 'Trísia', idade: 22, cpf: '456.123.789-22' }
];

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

// Função para inserir um usuário na lista
function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');
    const divElement = document.createElement('div');

    // Função para criar elementos não editáveis que podem ser clicados para edição
    function criarElementoNaoEditavel(label, valor) {
        const strong = document.createElement('strong');
        strong.textContent = label;
        const texto = document.createElement('span');
        texto.textContent = valor;

        // Adiciona o evento para editar o texto quando clicado
        texto.addEventListener('click', () => {
            const input = document.createElement('input');
            input.value = texto.textContent;
            texto.replaceWith(input); // Substitui o texto pelo input
            input.focus();

            // Criação do botão de salvar, só aparece durante a edição
            const botaoSalvar = document.createElement('button');
            botaoSalvar.textContent = 'Salvar';
            botaoSalvar.addEventListener('click', () => {
                texto.textContent = input.value; // Atualiza o texto com o valor do input
                input.replaceWith(texto); // Substitui o input de volta por texto

                // Atualiza os dados do usuário com as edições feitas
                usuario.nome = divElement.querySelectorAll('span')[0].textContent;
                usuario.idade = parseInt(divElement.querySelectorAll('span')[1].textContent);
                usuario.cpf = divElement.querySelectorAll('span')[2].textContent;

                // Exemplo de log dos dados atualizados
                console.log(usuario); // Você pode atualizar o banco de dados ou fazer algo com os dados aqui

                // Remove o botão salvar após salvar
                botaoSalvar.remove();
            });

            // Adiciona o botão salvar à div, logo após o input
            divElement.appendChild(botaoSalvar);
        });
        
        divElement.appendChild(strong);
        divElement.appendChild(texto);
    }

    // Cria os elementos para Nome, Idade e CPF
    criarElementoNaoEditavel('Nome: ', usuario.nome);
    divElement.appendChild(document.createElement('br'));
    criarElementoNaoEditavel('Idade: ', usuario.idade);
    divElement.appendChild(document.createElement('br'));
    criarElementoNaoEditavel('CPF: ', usuario.cpf);

    // Botão para remover o usuário
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'X';
    botaoRemover.style.color = 'red';  // Estilo opcional para destacar o botão
    botaoRemover.addEventListener('click', () => {
        liElement.remove(); // Remove o item da lista
    });

    // Adiciona o botão de remover à lista de usuário
    liElement.appendChild(divElement);
    liElement.appendChild(botaoRemover);

    // Adiciona o item à lista de usuários no DOM
    listaUsuariosElement.appendChild(liElement);
}
