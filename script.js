document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     AUDIO CONTEXT (GLOBAL)
  =============================== */
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  function desbloquearAudio() {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  document.body.addEventListener("click", desbloquearAudio, { once: true });

  /* ===============================
     SOM CRF 250R — BRAP BRAP
  =============================== */
  function tocarBrapCRF250R() {
    desbloquearAudio();

    function brap(delay = 0) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime + delay);
      osc.frequency.exponentialRampToValueAtTime(
        600,
        audioCtx.currentTime + delay + 0.2
      );

      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(
        0.6,
        audioCtx.currentTime + delay + 0.05
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + delay + 0.3
      );

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime + delay);
      osc.stop(audioCtx.currentTime + delay + 0.32);
    }

    // BRAP BRAP duplo
    brap(0);
    brap(0.35);
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

    tocarBrapCRF250R();

    if (navigator.vibrate) {
      navigator.vibrate([120, 60, 120]);
    }

    document.body.classList.add("shake");
    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 400);

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