function Animal(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade + " anos";
    this.sexo = sexo;
}

function Lobo(idade, sexo) {
    Animal.call(this, "lobo", idade, sexo);

    this.uiva = function() {
        return "auuu";
    }
}

function Gato(idade, sexo) {
    Animal.call(this, "gato", idade, sexo);

    this.fazMiau = function() {
        return "miau";
    }
}

const lobo1 = new Lobo(1, "feminino");
const gato1 = new Gato(2, "feminino");
const lobo2 = new Lobo(3, "masculino");


console.log(lobo1);
console.log(lobo1.uiva());
console.log(gato1);
console.log(gato1.fazMiau());
console.log(lobo2);
console.log(lobo2.uiva());