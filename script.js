document.addEventListener("DOMContentLoaded", () => {
  const andaMoto = document.getElementById("andaMoto");
  const motoContainer = document.getElementById("motoContainer");
  const formInteracao = document.getElementById("formInteracao");
  const resposta = document.getElementById("resposta");

  // Mostrar/esconder campo das motos conforme escolha
  andaMoto.addEventListener("change", () => {
    if (andaMoto.value === "sim") {
      motoContainer.style.display = "block";
    } else {
      motoContainer.style.display = "none";
    }
  });

  // Efeito nos cliques das imagens
  document.querySelectorAll(".imagens img").forEach((img) => {
    img.addEventListener("click", () => {
      alert("Você clicou em uma imagem de brap! 🏁");
    });
  });

  // Lógica do formulário
  formInteracao.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const andaMotoVal = andaMoto.value;
    const motosSelecionadas = Array.from(
      document.getElementById("moto").selectedOptions
    ).map(opt => opt.text);

    let mensagem = `Salve, ${nome}! `;

    if (!isNaN(idade)) {
      mensagem += idade >= 18
        ? "Maior de idade, pronto pra acelerar forte! "
        : "Menor de idade, mas já pode sentir o gosto da trilha! ";
    } else {
      mensagem += "Não entendi sua idade. ";
    }

    if (andaMotoVal === "sim") {
      mensagem += "Boa! Você já anda de moto. ";
      if (motosSelecionadas.length > 0) {
        mensagem += `Máquinas escolhidas: ${motosSelecionadas.join(", ")}. Que combo insano! 🏍️🔥`;
      } else {
        mensagem += "Me conta qual moto você pilota!";
      }
    } else if (andaMotoVal === "nao") {
      mensagem += "Ainda não anda de moto, mas nunca é tarde pra sentir o BRAP! 😉";
    }

    resposta.textContent = mensagem;
  });
});


