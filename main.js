$(document).ready(function () {

    $('ul').on('click', 'li', function () {
        $(this).addClass('mark');
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const adicionaTarefa = $('#adiciona-tarefa').val();
        const novaTarefa = $(`<li>${adicionaTarefa}</li>`);

        $(novaTarefa).appendTo('ul');

        $('#adiciona-tarefa').val('');
    })
});