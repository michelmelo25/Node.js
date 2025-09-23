- INIANDO COM NODE.JS E ESTRUTURA DA APLICAÇÃO

importações interna do node.js deve conter o prefixo 'node:'
ex: import http from 'node:http' 

// iniciar/criar projeto noje
npm init -y


Statfull sempre tera informções sava em memoria

Stateless não salva nada em memoria, sempre dispositivo esterno como banco de dados ou arquivo

- SREAMS NO NODE.JS
// Importação de Cliente via SCV (Excel)

// Readable Strems / Writeble Strems

ir processando os dados do arquivo a medida que ele esta chegando, sem a nessecidade se esperar toda a trasnferencia de arquivo ser finalizada.

// process.stdin.pipe(process.stdout)
recebe a informação digitada no terminal e devolve para o terminal

- STREAM DE ESCRIA E TRANSFORMAÇÃO
chunk -> é um pedaçõ que foi lido na stream de leitura, tudo que é inviado em this.push
encoding -> como a informação esta codificada 
callback -> é uma função que a stream de escrita prscisa chamar quando ela terminou de fazer o que ela precisava fazer com aquela informação

dentro da stream de escrita, a gente não retorna nada, ela processa o dado, ela nunca vai transformar um dado em alguma outra coisa. Ela vai apenas processar o dado.

A stream de escrita, eu só consigo escrever dados para ela. A stream de transformação, ela obrigatoriamente precisa ler dados de algum lugar e escrever dados para outro lugar. Ela é uma stream utilizada no intermeio para comunicação entre duas outras streams. 

uma stream duplex, que pode ter tanto o método de leitura quanto o método de escrita, ou seja, ela pode fazer qualquer tipo de operação, tanto leitura quanto escrita.

poderia pensar uma stream duplex como sendo um arquivo físico do nosso sistema. um arquivo no nosso sistema, podemos tanto ler ele quanto escrever nele, mas não necessariamente pode transformar algo dentro dele.

modulos http, corpo da requisicao JSON e middleware

middleware é um interceptar, que sempre resebe como parametro o request e response