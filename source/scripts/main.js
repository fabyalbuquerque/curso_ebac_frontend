$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {placeholder:'(DD) 12345-1234'});
    $('#email').mask('', {placeholder:'user@email.com'});
    $('#nome').mask('', {placeholder:'Fulano de Ciclano'});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            nome: "Por favor, insira seu nome",
            email: "Por favor, insira seu e-mail",
            telefone: "Insira seu número de telefone"
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
})