const hora = 20
console.log(`Agora sao ${hora} horas`, )
if(hora >= 0 && hora < 6){
  console.log('Boa Madrugada!')
} else if (hora >=7 && hora < 12){
  console.log('Bom Dia!')
} else if(hora >= 13 && hora < 17){
  console.log('Boa Tarde!')
} else if (hora >= 17 && hora < 23){
  console.log('Boa Noite!')
}