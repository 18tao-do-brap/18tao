document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SOM DE BRAP (Super Mario)
  =============================== */
  const somBrap = new Audio("supermario_brap.mp3"); // coloque seu som aqui
  somBrap.volume = 1.0;

  function tocarBrapCRF250R() {
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

  // Mostrar seleção de moto se a pessoa anda de moto
  andaMoto.addEventListener("change", () => {
    motoContainer.style.display =
      andaMoto.value === "sim" ? "block" : "none";
  });

  formInteracao.addEventListener("submit", (e) => {
    e.preventDefault();

    // 🔊 Som BRAP
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

    // ===== Mensagem personalizada =====
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
     GALERIA
  =============================== */
  document.querySelectorAll(".grid-galeria img").forEach(img => {
    img.addEventListener("click", () => {
      tocarBrapCRF250R();
      alert("BRAP! 🏁🔥 Foto insana!");
    });
  });

});