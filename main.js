const form = document.getElementById('form-valida');
const a = document.getElementById("campo-a");
const b = document.getElementById("campo-b");

function validaB(valorA, valorB) {
    valida = valorB > valorA;
    return valida
}

form.addEventListener('submit', function (e) {
    e.preventDefault();  

    formValido = validaB(a.value, b.value)

    if (formValido) {
        document.querySelector('.mensagem-valida').style.display = 'block';

        a.value = ''
        b.value = ''
        
    } else {
        document.querySelector('.mensagem-valida').style.display = 'none';
        document.querySelector('.mensagem-b-menor').style.display = 'block';
        b.classList.add('error')
    }
});

b.addEventListener('keyup', function (e) {
    formValido = validaB(a.value, e.target.value);

    if (!formValido) {
        b.classList.add('error')
        document.querySelector('.mensagem-valida').style.display = 'none';
        document.querySelector('.mensagem-b-menor').style.display = 'block';
        
    } else {
        b.classList.remove('error')
        document.querySelector('.mensagem-b-menor').style.display = 'none';
    }
});