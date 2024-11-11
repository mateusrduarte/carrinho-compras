function adicionar() {
  let produto = document.getElementById("produto").value.split(" - ");
  let quantidade = document.getElementById("quantidade").value;
  let valor = parseInt(produto[1].slice(2));

  document.querySelector(
    ".carrinho__produtos__produto"
  ).innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto[0]} <span class="texto-azul">${produto[1]}</span>`;
  document.getElementById("valor-total").innerHTML = `RS${valor * quantidade}`;
}
