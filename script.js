const devolvendoPergunta = document.querySelector("h5")
const devolvendoResposta = document.querySelector("h4")

const button = document.querySelector("button")
const input = document.querySelector("input")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

button.addEventListener("click", (e) => {
  const perguntaUsuario = input.value
  const respostaAleatoria =
    respostas[Math.floor(Math.random() * respostas.length)]

  if (input.value == "") {
    alert("Digite uma pergunta")
    return
  }

  button.setAttribute("disabled", true)

  devolvendoPergunta.innerText = `${perguntaUsuario}`
  devolvendoResposta.innerText = `${respostaAleatoria}`

  e.preventDefault()

  setTimeout(function () {
    devolvendoResposta.style.opacity = 0
    devolvendoPergunta.style.opacity = 0
  }, 3000)
  button.removeAttribute("disabled")
})