/*1. Crie uma arrow function chamada "boasVindas" que recebe um nome e devolve a frase "Bem-vindo(a), NOME!" usando template string.
   Teste: boasVindas("Carla") deve mostrar "Bem-vindo(a), Carla!"*/

   const boasVindas = (nome) => `Bem-vindo(a), ${nome}!`;

   console.log(boasVindas("Carla")); // Deve mostrar "Bem-vindo(a), Carla!"