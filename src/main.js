const aluno = (nome, nota) => ({nome, nota})

let alunos = [aluno("Gustavo", 8.5), aluno("Maria", 7.3), aluno("João", 2.1), aluno("Letícia", 9), aluno("Joaquina", 4)]

const mediaMaiorQue6 = (aluno) => aluno.nota >= 6

console.log(alunos.filter(mediaMaiorQue6))
