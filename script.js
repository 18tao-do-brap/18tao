document.addEventListener("DOMContentLoaded", () => {
  // Efeito nos cliques das imagens
  document.querySelectorAll(".imagens img").forEach((img) => {
    img.addEventListener("click", () => {
      alert("Você clicou em uma imagem de brap! 🏁");
    });
  });

  // Formulário de interação
  const formInteracao = document.getElementById("formInteracao");
  const resposta = document.getElementById("resposta");

  formInteracao.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const andaMoto = document.getElementById("andaMoto").value;
    const motosSelecionadas = Array.from(
      document.getElementById("moto").selectedOptions
    ).map(opt => opt.text);

    if (!nome) {
      resposta.textContent = "Me diz seu nome pra eu te dar o salve!";
      return;
    }

    let mensagem = `Salve, ${nome}! `;

    if (!isNaN(idade)) {
      mensagem += idade >= 18
        ? "Maior de idade, pronto pra acelerar forte! "
        : "Menor de idade, mas já pode sentir o gosto da trilha! ";
    } else {
      mensagem += "Não entendi sua idade. ";
    }

    if (andaMoto === "sim") {
      mensagem += "Boa! Você já anda de moto. ";
      if (motosSelecionadas.length > 0) {
        mensagem += `Máquinas escolhidas: ${motosSelecionadas.join(", ")}. Que combo insano! 🏍️🔥`;
      } else {
        mensagem += "Me conta qual moto você pilota no campo acima!";
      }
    } else if (andaMoto === "nao") {
      mensagem += "Ainda não anda de moto, mas nunca é tarde pra sentir o BRAP! 😉";
    } else {
      mensagem += "Seleciona aí se você anda de moto.";
    }

    resposta.textContent = mensagem;
  });
});



