document.addEventListener("DOMContentLoaded", () => {
  const formInteracao = document.getElementById("formInteracao");
  const resposta = document.getElementById("resposta");

  formInteracao.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const andaMoto = document.getElementById("andaMoto").value;
    const motosSelecionadas = Array.from(document.getElementById("moto").selectedOptions).map(opt => opt.text);

    let mensagem = `Salve, ${nome}! `;

    if (!isNaN(idade)) {
      mensagem += idade >= 18
        ? "Você já tá na maioridade, pronto pra acelerar forte! "
        : "Ainda menor de idade, mas já pode sentir o gosto da trilha! ";
    }

    if (andaMoto === "sim") {
      mensagem += "Boa! Você já anda de moto. ";
      if (motosSelecionadas.length > 0) {
        mensagem += `Suas máquinas escolhidas: ${motosSelecionadas.join(", ")}. Que combo insano! 🏍️🔥`;
      } else {
        mensagem += "Me conta qual moto você pilota!";
      }
    } else if (andaMoto === "nao") {
      mensagem += "Ainda não anda de moto, mas nunca é tarde pra sentir o BRAP! 😉";
    } else {
      mensagem += "Responde aí se você anda de moto!";
    }

    resposta.textContent = mensagem;
  });
});



