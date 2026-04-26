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

// DATAS DOS OBJETIVOS
const tempos = [
  new Date("2026-04-27"),
  new Date("2026-10-01"),
  new Date("2026-08-01"),
  new Date("2026-06-01")
];

// FUNÇÃO DE TEMPO
function calculaTempo(data) {
  const agora = new Date();
  const diff = data - agora;

  let s = Math.floor(diff / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  s %= 60;
  m %= 60;
  h %= 24;

  if (diff <= 0) return [0,0,0,0];

  return [d, h, m, s];
}

// ATUALIZA CONTADOR
function atualizar() {
  tempos.forEach((tempo, i) => {
    const [d, h, m, s] = calculaTempo(tempo);

    document.getElementById(`dias${i}`).textContent = d;
    document.getElementById(`horas${i}`).textContent = h;
    document.getElementById(`min${i}`).textContent = m;
    document.getElementById(`seg${i}`).textContent = s;
  });
}

// LOOP
setInterval(atualizar, 1000);
atualizar();