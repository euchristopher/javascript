const idade = 6
console.log(`Você tem ${idade} anos. `)
if (idade < 16){
  console.log('Não pode votar.')
} else if(idade < 18 || idade >= 65){
  console.log('Pode votar, mas não é obrigatório.')
} else {
  console.log('Pode votar e é obrigatório.') 
}