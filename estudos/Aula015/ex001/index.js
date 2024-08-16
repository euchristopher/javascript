const num = [5, 8, 2, 9, 3]
num.push()
num.sort()
console.log(`${num}`)
console.log(`O nosso vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
const pos = num.indexOf(8)
if (pos == -1 ) {
  console.log("Valor não encontrado.")
} else {
  console.log(`O valor 8 está na posição ${pos}.`)
}