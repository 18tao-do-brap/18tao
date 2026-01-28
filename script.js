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
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  function brap(delay = 0) {
    // ===== NOISE (explosão)
    const bufferSize = audioCtx.sampleRate * 0.15;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    // ===== FILTRO (grave sujo)
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(900, audioCtx.currentTime + delay);

    // ===== GAIN (pancada)
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(
      1.0,
      audioCtx.currentTime + delay + 0.02
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + delay + 0.18
    );

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start(audioCtx.currentTime + delay);
    noise.stop(audioCtx.currentTime + delay + 0.2);
  }

  // BRAP BRAP (duplo)
  brap(0);
  brap(0.25);
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