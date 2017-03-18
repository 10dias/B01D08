/**
  * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Retornar um número de lançamentos futuros de foguetes para o espaço
    * Esse número vai ser determinado pelo usuário
  *
  * @license MIT
  *
  */

'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const qst = "Insira a quantidade de lançamentos futuros você deseja " +
    "ver informações\n";

rl.question(qst, function(ans) {
    rl.close();

    console.log(ans.trim());
});

