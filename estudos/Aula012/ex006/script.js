function carregar(){
  const hora = new Date();
  const horaAtual = hora.getHours()
  const saudacao = document.getElementById('saudacao')
  if (horaAtual >=0 && horaAtual < 12){
    saudacao.innerHTML = `Olá, Bom dia! agora são ${horaAtual}`
  } else if (horaAtual >= 13 && horaAtual < 18){
    saudacao.innerHTML = `Olá, Boa Tarde! agora são ${horaAtual} horas.`
  } else{
    saudacao.innerHTML = `Olá, Boa noite! agora são ${horaAtual} horas`
  }
}
function verificar() {
  const data = new Date(); // Definindo a variável data
  const ano = data.getFullYear();
  const fAno = document.getElementById("txtano");
  const res = document.querySelector("div#res");

  if (fAno.value.length === 0 || Number(fAno.value) > ano) {
    res.innerHTML = "Por favor, digite um ano válido.";
    return false;
  } else {
    const fsex = document.getElementsByName("radsex");
    const idade = ano - Number(fAno.value);
    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "Masculino";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "foto-crianca.png");
      } else if (idade < 21) {
        // adolescente
        img.setAttribute("src", "foto-adolescente.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "foto-adulto.png");
      } else {
        // idoso
        img.setAttribute("src", "foto-idoso.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Feminino";
      if (idade >= 0 && idade < 12) {
        // criança
        img.setAttribute("src", "foto-crianca-feminina.png");
      } else if (idade < 21) {
        // adolescente
        img.setAttribute("src", "foto-adolescente-feminina.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "foto-adulto-feminino.png");
      } else {
        // idoso
        img.setAttribute("src", "foto-idosa-feminina.png");
      }
    }
    res.innerHTML = `Você é do gênero <strong>${gênero}</strong> e tem <strong>${idade}</strong> anos.`;
    //res.appendChild(img); // Adicionando a imagem ao resultado
  }
}