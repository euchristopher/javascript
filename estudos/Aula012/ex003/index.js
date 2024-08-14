const agora = new Date()
const hora = agora.getHours()
const minutos = agora.getMinutes()

// Mostra a hora exata no console.log()
console.log(`Agora sao exatamente ${hora} horas e ${minutos} minutos.`)
if(hora >= 0 && hora < 6){
  console.log('Boa Madrugada!')
} else if (hora >= 6 && hora < 12){
  console.log('Bom Dia!')
} else if (hora >= 12 && hora < 18){
  console.log('Boa Tarde!')
} else if (hora >= 18 && hora < 23){
  console.log('Boa Noite!')
}