# Bem-vindos ao Mesha Weather 

Mesha Weather é um projeto desenvolvido para Web para o processo seletivo da Mesha Tecnologia. [Você pode encontrar o resultado final aqui](https://mesha-weather.herokuapp.com/).

## Objetivo

- Consumo de API externas, à partir de documentação
- Salvar as informações somente no storage do navegador (Não utilizar backend e/ou banco de dados)
- Estrutura de projeto (Componentes, etc)
- O projeto deve ser feito em REACT

## Descrição

Dada uma localização (Cidade, latitude, longitude, etc) a aplicação deverá buscar na API de tempo (Weather API ou afins) a temperatura relativa da localização e assim que retornada a resposta deverá ser solicitada para à API de músicas (Shazam API ou afins) a lista de músicas recomendadas para o clima atual.

- Caso a temperatura seja maior que 32 graus, deverá retornar Rock;
- Caso a temperatura seja menor que 32 e maior 24, deverá retornar Pop;
- Caso a temperatura seja menor que 24 e maior que 16, devera retornar Classica;
- E caso a temperatura seja menor que 16, deverá retornar Lofi.

Assim que retornado à lista de música, caso seja do agrado da pessoa, poderá ser salva no storage do navegador com a data de busca, a lista de músicas, à temperatura, à cidade e a categoria das músicas.

Deverá haver uma página mostrando a listagem das músicas por data salva no storage.

As listas podem ser deletadas.

## Como rodar o projeto localmente

[Você pode encontrar o resultado final aqui](https://mesha-weather.herokuapp.com/).Mas se quiser rodar localmente abra seu terminal e siga as instruções à seguir: 

- mkdir nome_do_projeto
- cd nome_do_projeto
- git clone `https://github.com/mateussays/mesha-weather.git`
- cd mesha
- npm install
- npm start
