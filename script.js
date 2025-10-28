document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".imagens img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      alert("Você clicou em uma imagem de brap! 🏁");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formInteracao");
  const resposta = document.getElementById("resposta");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const moto = document.getElementById("moto").value;

    let mensagem = `Salve, ${nome}! `;

    if (isNaN(idade)) {
      mensagem += "Não entendi sua idade.";
    } else {
      if (idade >= 18) {
        mensagem += "Você é maior de idade. ";
      } else {
        mensagem += "Você ainda é menor de idade. ";
      }

      if (moto === "sim") {
        mensagem += "E já tá acelerando nas trilhas, hein? BRAP BRAP! 🏍️🔥";
      } else if (moto === "nao") {
        mensagem += "Mas ainda dá tempo de subir numa moto e sentir o BRAP! 😉";
      } else {
        mensagem += "Me conta se você anda de moto!";
      }
    }

    resposta.textContent = mensagem;
  });
});
