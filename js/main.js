$(document).ready(function () {
    $('#cep').mask('00000-000', {placeholder: 'CEP'});
    $('#cpf').mask('000.000.000-00', { placeholder: 'CPF' });
    $('#tel').mask('(00) 00000-0000', {placeholder:'Telefone'});
})