document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     NAVEGAÇÃO INÍCIO / GALERIA
  =============================== */
  const btnInicio = document.getElementById("btnInicio");
  const btnGaleria = document.getElementById("btnGaleria");

  const secaoInicio = document.getElementById("inicio");
  const secaoGaleria = document.getElementById("galeria");

  btnInicio.addEventListener("click", (e) => {
    e.preventDefault();
    secaoInicio.style.display = "block";
    secaoGaleria.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  btnGaleria.addEventListener("click", (e) => {
    e.preventDefault();
    secaoInicio.style.display = "none";
    secaoGaleria.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ===============================
     FORMULÁRIO
  =============================== */
  const andaMoto = document.getElementById("andaMoto");
  const motoContainer = document.getElementById("motoContainer");
  const formInteracao = document.getElementById("formInteracao");
  const resposta = document.getElementById("resposta");

  andaMoto.addEventListener("change", () => {
    motoContainer.style.display =
      andaMoto.value === "sim" ? "block" : "none";
  });

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
        : "Menor de idade, mas já tem espírito de piloto! ";
    }

    if (andaMotoVal === "sim") {
      mensagem += "Boa! Você já anda de moto. ";
      if (motosSelecionadas.length > 0) {
        mensagem += `Máquina insana: ${motosSelecionadas.join(", ")} 🏍️🔥`;
      } else {
        mensagem += "Depois me conta qual moto você pilota!";
      }
    } else {
      mensagem += "Ainda não anda de moto, mas o BRAP chama 😎";
    }

    resposta.textContent = mensagem;
  });

  /* ===============================
     CLIQUE NAS IMAGENS DA GALERIA
  =============================== */
  document.querySelectorAll(".grid-galeria img").forEach(img => {
    img.addEventListener("click", () => {
      alert("BRAP! 🏁🔥 Foto insana!");
    });
  });

});