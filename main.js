const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

// TROCA DE ABAS
botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    abas.forEach(a => a.classList.remove("ativo"));

    botao.classList.add("ativo");
    abas[i].classList.add("ativo");
  });
});

// DATAS CORRETAS DOS OBJETIVOS
const tempos = [
  new Date("2026-04-11T00:00:00"), // mudar de casa
  new Date("2027-01-01T00:00:00"), // vestibular
  new Date("2026-12-18T00:00:00"), // terminar ensino médio
  new Date("2026-12-31T00:00:00")  // organizar financeiramente
];

// FORMATAÇÃO (02, 03, etc)
function formatar(n) {
  return n.toString().padStart(2, "0");
}

// FUNÇÃO DE TEMPO
function calculaTempo(data) {
  const agora = new Date();
  const diff = data - agora;

  if (diff <= 0) return [0, 0, 0, 0];

  let s = Math.floor(diff / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  s %= 60;
  m %= 60;
  h %= 24;

  return [d, h, m, s];
}

// ATUALIZA CONTADOR
function atualizar() {
  tempos.forEach((tempo, i) => {
    const [d, h, m, s] = calculaTempo(tempo);

    document.getElementById(`dias${i}`).textContent = formatar(d);
    document.getElementById(`horas${i}`).textContent = formatar(h);
    document.getElementById(`min${i}`).textContent = formatar(m);
    document.getElementById(`seg${i}`).textContent = formatar(s);
  });
}

// LOOP
setInterval(atualizar, 1000);
atualizar();