AOS.init();

const frases = [
  "No meu funciona...",
  "Café + Código = Vida.",
  "Não é um bug, é uma feature"
];

const botao = document.getElementById("botao-magico");
const resultado = document.getElementById("resultado");


function sortearFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

botao.addEventListener("click", () => {
  resultado.textContent = sortearFrase();
  AOS.refresh(); // Atualiza o AOS para animar o novo conteúdo
});