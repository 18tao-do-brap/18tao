document.addEventListener("DOMContentLoaded", () => {
  const andaMoto = document.getElementById("andaMoto");
  const motoContainer = document.getElementById("motoContainer");
  const motoSelect = document.getElementById("moto");
  const formInteracao = document.getElementById("formInteracao");
  const resposta = document.getElementById("resposta");

  // Mostrar ou esconder campo de motos
  andaMoto.addEventListener("change", () => {
    if (andaMoto.value === "sim") {
      motoContainer.style.display = "block";
      motoSelect.setAttribute("required", "required");
    } else {
      motoContainer.style.display = "none";
      motoSelect.removeAttribute("required");

      // Limpa motos selecionadas
      Array.from(motoSelect.options).forEach(opt => opt.selected = false);
    }
  });

  // Clique nas imagens
  document.querySelectorAll(".imagens img").forEach(img => {
    img.addEventListener("click", () => {
      alert("Você clicou em uma imagem de BRAP! 🏁🔥");
    });
  });

  // Envio do formulário
  formInteracao.addEventListener("submit", (e) => {
    e.preventDefault();
    resposta.textContent = "";

    const nome = document.getElementById("nome").value.trim();
    const idade = Number(document.getElementById("idade").value);
    const andaMotoVal = andaMoto.value;

    if (!nome) {
      resposta.textContent = "Ei piloto, manda seu nome aí! 😅";
      return;
    }

    let mensagem = `Salve, ${nome}! `;

    if (idade >= 18) {
      mensagem += "Maior de idade, pronto pra acelerar forte! 🔥 ";
    } else {
      mensagem += "Menor de idade, mas o BRAP já corre no sangue! 💪 ";
    }

    if (andaMotoVal === "sim") {
      const motosSelecionadas = Array.from(motoSelect.selectedOptions)
        .map(opt => opt.text);

      mensagem += "Boa! Você já anda de moto. ";

      if (motosSelecionadas.length > 0) {
        mensagem += `Máquina nervosa hein: ${motosSelecionadas.join(", ")}! 🏍️🔥`;
      } else {
        mensagem += "Mas ainda não escolheu a moto 👀";
      }
    } else {
      mensagem += "Ainda não anda de moto, mas isso é só questão de tempo! 😉";
    }

    resposta.textContent = mensagem;
  });
});