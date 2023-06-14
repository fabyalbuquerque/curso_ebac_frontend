const form = document.getElementById('formulario');
let linhas = '';
nomes = [];
numeros = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
});

function adicionaContato() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if (nomes.includes(nomeContato.value)) {
        alert(`Já existe um contato com este nome "${nomeContato.value}"`);
    } else if (numeros.includes(numeroContato.value)) {
        alert(`Já existe um contato com este número "${numeroContato.value}"`);
    } else {
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);

        
        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `<td class="tabela-excluir"><span class="span-excluir">-</span></td>`;
        linha += `</tr>`;
        linhas += linha;

        nomeContato.value = ''
        numeroContato.value = ''
    }
    
    
}

function atualizaAgenda() {
    const tabela = document.getElementById('tabela-body');

    tabela.innerHTML = linhas;
}

const tabela = document.getElementById('tabela-contatos');

tabela.addEventListener('click', function (event) {
    const elementoClicado = event.target;

    if (elementoClicado.classList.contains('span-excluir')) {
        const celula = elementoClicado.parentNode;
        const linhaTabela = celula.parentNode;
        linhaTabela.remove();

    }

});