function tabuada() {
  const num = document.querySelector("input#txtn");
  const tab = document.getElementById("seltab");
  tab.innerHTML = "";
  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    const n = Number(num.value);
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement("option");
      item.text = `${n} x ${i} = ${n * i}`;
      tab.appendChild(item);
    }
  }
}