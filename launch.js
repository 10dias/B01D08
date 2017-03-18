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
const https = require('https');

const API = {
    host:"launchlibrary.net",
    path:"/1.2/launch/next/"
};

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

    https.get({
        hostname: API.host,
        path: API.path + ans,
        headers: {
            'Accept':'application/json',
            'User-Agent':'B01D08'
        }
    }, function(res) {
        let finalData = '';

        res.on('data', function(d) {
            finalData+=d;
        });

        res.on('end', function() {
            finalData = JSON.parse(finalData);

            finalData.launches.forEach(function(l) {
                console.log('###');
                console.log('Missão ' + l.name);
                console.log('Abertura da janela para lançamento: ' + l.windowstart);
                console.log('Fechamento da janela para lançamento: ' + l.windowend);
                console.log('###');
            });
        });
    });
});

