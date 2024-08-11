const vel = 59
console.log(`A velocidade do seu carro é de: ${vel}km/h`)
if (vel > 90){
  console.log(`A sua velocidade é de ${vel}km/h. Você foi severamente multado e será encaminhado para a delegacia.`)
} else if (vel > 60){
  console.log(`A sua velocidade é de ${vel}. Você sera multado, dirija com segurança!`)
} else{
  console.log(`A sua velocidade é de ${vel}km/h. Você não será multado, dirija com cautela!`)
}