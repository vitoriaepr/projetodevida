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

// 🔥 DATAS NO FUSO LOCAL (SEM BUG)
const tempos = [
  new Date(2026, 3, 11, 0, 0, 0), // 11/04/2026
  new Date(2027, 0, 1, 0, 0, 0),  // 01/01/2027
  new Date(2026, 11, 18, 0, 0, 0),// 18/12/2026
  new Date(2026, 11, 31, 0, 0, 0) // 31/12/2026
];

// FORMATAR
function formatar(n) {
  return n.toString().padStart(2, "0");
}

// CALCULAR TEMPO
function calculaTempo(data) {
  const agora = new Date();
  let diff = data.getTime() - agora.getTime();

  if (diff <= 0) return [0, 0, 0, 0];

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * (1000 * 60);

  const segundos = Math.floor(diff / 1000);

  return [dias, horas, minutos, segundos];
}

// ATUALIZAR
function atualizar() {
  tempos.forEach((tempo, i) => {
    const [d, h, m, s] = calculaTempo(tempo);

    document.getElementById(`dias${i}`).textContent = formatar(d);
    document.getElementById(`horas${i}`).textContent = formatar(h);
    document.getElementById(`min${i}`).textContent = formatar(m);
    document.getElementById(`seg${i}`).textContent = formatar(s);
  });
}

setInterval(atualizar, 1000);
atualizar();