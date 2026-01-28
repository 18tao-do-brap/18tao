document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SOM REAL DE MOTOCROSS – 4 TEMPOS
  =============================== */
  const somBrap = new Audio("motocross1");
  somBrap.volume = 1.0;

  function tocarBrapCRF250R() {
    // reinicia o áudio do começo
    somBrap.currentTime = 0;
    somBrap.play();

    // BRAP BRAP duplo
    setTimeout(() => {
      somBrap.currentTime = 0;
      somBrap.play();
    }, 250);
  }

  /* ===============================
     NAVEGAÇÃO
  =============================== */
  const btnInicio = document.getElementById("btnInicio");
  const btnGaleria = document.getElementById("btnGaleria");
  const secaoInicio = document.getElementById("inicio");
  const secaoGaleria = document.getElementById("galeria");

  btnInicio.addEventListener("click", (e) => {
    e.preventDefault();
    secaoInicio.style.display = "block";
    secaoGaleria.style.display = "none";
  });

  btnGaleria.addEventListener("click", (e) => {
    e.preventDefault();
    secaoInicio.style.display = "none";
    secaoGaleria.style.display = "block";
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

    // 🔊 Toca o BRAP real
    tocarBrapCRF250R();

    // 📳 Vibração no celular
    if (navigator.vibrate) {
      navigator.vibrate([120, 60, 120]);
    }

    // 📺 Tremida da tela
    document.body.classList.add("shake");
    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 400);

    // Mensagem pro usuário
    const nome = document.getElementById("nome").value.trim();
    resposta.textContent = `Salve, ${nome}! O BRAP respondeu 😈🏍️`;
  });

  /* ===============================
     GALERIA
  =============================== */
  document.querySelectorAll(".grid-galeria img").forEach(img => {
    img.addEventListener("click", () => {
      tocarBrapCRF250R();
    });
  });

});