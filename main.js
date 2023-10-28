$(document).ready(function() {

    const api = 'https://api.github.com/users/fabyalbuquerue';

    fetch(api)
    .then(function(resposta) {

        if (resposta.status !==200) {
            throw new Error('Solicitação falhou, verifique se o usuário existe.');
        }

        return resposta.json();
    })
    .then(function(json) { 
        $('#avatar').attr('src', json.avatar_url);
        $('#name').text(json.name);
        $('#username').text(json.login);
        $('#repository').find('span').text(json.public_repos);
        $('#followers').find('span').text(json.followers);
        $('#following').find('span').text(json.following);
        $('#link').attr('href', json.html_url);
    })
    .catch(function(error) {
        console.error(error);

        $('#avatar').attr('src', "https://via.placeholder.com/180x180");
        $('#name').text("Default");
        $('#username').text("default");
        $('#repository').find('span').text("N/A");
        $('#followers').find('span').text("N/A");
        $('#following').find('span').text("N/A");
        $('#link').attr('href', "#");

        alert("Perfil de usuário não encontrado");
    })
})
