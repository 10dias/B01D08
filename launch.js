/**
  * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Retornar um número de lançamentos futuros de foguetes para o espaço
    * Esse número vai ser determinado pelo usuário
  *
  * @license MIT
  *
  */

'use strict';

const MAX_NUM = 10;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const qst = "Insira a quantidade de lançamentos futuros você deseja " +
    "ver informações\n";

rl.question(qst, function(ans) {
    rl.close();
    ans = Number(ans.trim());
    if (ans > MAX_NUM) {
        console.log('Número muito grande!');
        process.exit();
    }
});

