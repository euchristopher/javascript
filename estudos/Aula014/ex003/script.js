function contar() {
  const ini = document.querySelector("input#txti");
  const fim = document.querySelector("input#txtf");
  const passo = document.querySelector("input#txtp");
  const res = document.querySelector("div#res");
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = "Impossível contar!"
    alert("Por favor, preencha todos os campos.");
  } else {
    res.innerHTML = `Contando...`;
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if(passo <= 0) {
      alert("Passo inválido! Considerando passo 1.");
      p = 1;
    } 
    if (i < f) { /* Contagem Progressiva */
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c}, `;
      }
    } else { /* Contagem Regressiva */
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c}, `;
      }
    }
  }
}
