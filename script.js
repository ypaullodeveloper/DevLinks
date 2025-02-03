// Seleciona o elemento HTML principal e a tag img
const html = document.documentElement
const img = document.querySelector("#profile img")

// Função para alternar entre os modos claro e escuro
function toggleMode() {
  // Alterna a classe 'light' no HTML
  html.classList.toggle("light")

  // Atualiza a imagem com base no tema ativo
  updateImage()
}

// Função para atualizar a imagem de acordo com o tema
function updateImage() {
  if (html.classList.contains("light")) {
    // Tema claro: exibir imagem light
    img.setAttribute("src", "assets/imagens/avatar-light.png")
  } else {
    // Tema escuro: exibir imagem padrão
    img.setAttribute("src", "assets/imagens/avatar.png")
  }
}

// Chamada inicial para garantir que a imagem esteja correta ao carregar a página
updateImage()
