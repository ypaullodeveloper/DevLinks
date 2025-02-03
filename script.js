function toggleMode() {
  // Alterna a classe 'light' no HTML
  html.classList.toggle("light");

  // Atualiza a imagem com base no tema ativo
  updateImage();
}
  // pegar a tag img
function updateImage() {
  if (html.classList.contains("light")) {
    // Tema claro: exibir imagem light
    img.setAttribute("src", "assets/imagens/avatar-light.png");
  } else {
    // Tema escuro: exibir imagem padrão
    img.setAttribute("src", "assets/imagens/avatar.png");
  }
}
