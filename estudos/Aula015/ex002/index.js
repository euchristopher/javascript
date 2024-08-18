/*
const valores = [8, 1, 7, 4, 2, 9]
for (let pos = 0; pos < valores.length; pos++)
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)*/

const valores = [8, 1, 7, 4, 2, 9];
valores.sort();
for (let pos in valores) { /* ele vai mostrar a posição(pos) dos valores. */
  console.log(`A posição ${pos} tem posição ${valores[pos]}.`); /* tem que colocar [let] quando usar a função "for" */
}