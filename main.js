$(document).ready(function() {

    const api = 'https://api.github.com/users/fabyalbuquerque';

    fetch(api)
    .then(function(resposta) {
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
})