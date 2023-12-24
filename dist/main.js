"use strict";

var aluno = function aluno(nome, nota) {
  return {
    nome: nome,
    nota: nota
  };
};
var alunos = [aluno("Gustavo", 8.5), aluno("Maria", 7.3), aluno("João", 2.1), aluno("Letícia", 9), aluno("Joaquina", 4)];
var mediaMaiorQue6 = function mediaMaiorQue6(aluno) {
  return aluno.nota >= 6;
};
console.log(alunos.filter(mediaMaiorQue6));