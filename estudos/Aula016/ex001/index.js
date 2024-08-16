function parimpar(n) {
  if (n % 2 == 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}
const res = parimpar(2)
console.log(res)