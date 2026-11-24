/*2. Crie uma arrow function chamada "parOuImpar" que recebe um número e devolve "Par" ou "Ímpar". Use ternário.
   Teste: parOuImpar(4) deve mostrar "Par" e parOuImpar(7) deve mostrar "Ímpar"
*/
const parOuImpar = (numero) => (numero % 2 ) /*% é o operador de resto da divisão*/ === 0 ? "Par" : "Ímpar";

console.log(parOuImpar(4)); // Deve mostrar "Par"
