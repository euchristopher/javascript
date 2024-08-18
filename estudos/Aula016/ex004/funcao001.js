function parimpar(n) { //(n) é ação, parimpar é a função
  if (n % 2 == 0) { // o calculo é o parâmetro (a ordem dada para a ação)
    return "Par!"; // tem dois retornos, sendo par se o (n) for divisível por 2
  } else {
    return "Impar!"; // e o impar se (n) nao for
  }
}
const res = parimpar(4) //chamada com um número escolhido e com o retorno para a ação
console.log(res)