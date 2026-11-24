/*3. Dado o array abaixo, use map 
para criar um novo array com os preços
 em texto, no formato "R$ 10".
   const precos = [10, 25, 40];
   Resultado esperado: ["R$ 10", "R$ 25", "R$ 40"] */

   const precos = [10 , 25, 40];
   const precosEmTexto = precos.map((preco) => `R$ ${preco}`)
   